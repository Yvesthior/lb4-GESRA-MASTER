import React, {Component} from 'react';
import axios from 'axios';
import ModifierActivitePV from './ModifierActivitePV';

class ModifierActivitePC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typesActivite: [],
      filieres: [],
      users: [],
      modules: [],
      activite: [],
      user: '',
      filiere: '',
      module: '',
      typeActivite: '',
    };
  }
  UNSAFE_componentWillMount() {
    this.getData();
    this.getActiviteDetails();
  }

  getData = () => {
    const users = axios.get('http://localhost:4000/users');
    const filieres = axios.get('http://localhost:4000/filieres');
    const modules = axios.get('http://localhost:4000/modules');
    const typesActivite = axios.get('http://localhost:4000/type-activites');

    axios
      .all([users, filieres, modules, typesActivite])
      .then(
        axios.spread((...responses) => {
          this.setState({
            users: responses[0].data,
            filieres: responses[1].data,
            modules: responses[2].data,
            typesActivite: responses[3].data,
          });
        }),
      )
      .catch(errors => {
        // react on errors
        console.error(errors.message);
      });
  };
  getActiviteDetails() {
    let activiteId = this.props.match.params.id;
    axios
      .get(`http://localhost:4000/activites/${activiteId}`)
      .then(response => {
        this.setState(
          {
            activite: response.data,
          },
          () => {
            console.log(this.state.activite);
            this.getActivite();
          },
        );
      })
      .catch(err => console.log(err));
  }
  getActivite() {
    let activiteId = this.props.match.params.id;
    let userId = this.state.activite.usersId;
    const filiere = axios.get(
      `http://localhost:4000/activites/${activiteId}/filiere`,
    );
    const module = axios.get(
      `http://localhost:4000/activites/${activiteId}/module`,
    );
    const typeactivite = axios.get(
      `http://localhost:4000/activites/${activiteId}/type-activites`,
    );
    const user = axios.get(`http://localhost:4000/users/${userId}`);

    axios
      .all([user, filiere, module, typeactivite])
      .then(
        axios.spread((...responses) => {
          let name = ` ${responses[0].data.lastName} ${responses[0].data.firstName}`;
          this.setState({
            user: name,
            filiere: responses[1].data.name,
            module: responses[2].data.name,
            typeActivite: responses[3].data.name,
          });
        }),
      )
      .catch(errors => {
        // react on errors
        console.error(errors.message);
      });
  }

  editActivite = newActivite => {
    axios
      .request({
        method: 'put',
        url: `http://localhost:4000/activites/${this.state.activite.id}`,
        data: newActivite,
      })
      .then(response => {
        this.props.history.push('/activites');
      })
      .catch(err => console.log(err));
  };

  onSubmit = e => {
    console.log(e.target.name.value);

    const newActivite = {
      date_debut: e.target.date_debut.value.toString(),
      date_fin: e.target.date_fin.value.toString(),
      volumeHoraire: parseInt(e.target.volumeHoraire.value),
      commentaires: e.target.commentaire.value,
      moduleId: parseInt(e.target.module.value),
      typeActivitesId: parseInt(e.target.typeActivite.value),
      filiereId: parseInt(e.target.filiere.value),
      usersId: parseInt(e.target.user.value),
    };
    try {
      this.editActivite(newActivite);
    } catch (err) {
      console.log(err.message);
    }
    e.preventDefault();
  };

  render() {
    let filiereItems = this.state.filieres.map((item, i) => {
      return (
        <option value={`${item.id}`} key={item.id}>
          {item.name}
        </option>
      );
    });
    let moduleItems = this.state.modules.map((item, i) => {
      return (
        <option value={`${item.id}`} key={item.id}>
          {item.name}
        </option>
      );
    });
    let usersItems = this.state.users.map((item, i) => {
      return (
        <option value={`${item.id}`} key={item.id}>
          {`${item.lastName} ${item.firstName}`}
        </option>
      );
    });
    let typesActiviteItems = this.state.typesActivite.map((item, i) => {
      return (
        <option value={`${item.id}`} key={item.id}>
          {item.name}
        </option>
      );
    });
    let {user, filiere, module, typeActivite} = this.state;
    return (
      <div>
        <ModifierActivitePV
          user={user}
          filiere={filiere}
          module={module}
          typeActivite={typeActivite}
          filiereItems={filiereItems}
          moduleItems={moduleItems}
          usersItems={usersItems}
          typesActiviteItems={typesActiviteItems}
          activite={this.state.activite}
          submit={this.onSubmit}
        />
      </div>
    );
  }
}

export default ModifierActivitePC;
