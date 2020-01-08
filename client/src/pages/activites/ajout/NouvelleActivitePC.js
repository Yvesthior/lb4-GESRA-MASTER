import React, {Component} from 'react';
import axios from 'axios';
import NouvelleActivitePV from './NouvelleActivitePV';

class NouvelleActivitePC extends Component {
  state = {
    typesActivite: [],
    filieres: [],
    users: [],
    modules: [],
  };

  UNSAFE_componentWillMount() {
    this.getData();
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

  addActivite = newActivite => {
    axios
      .request({
        method: 'post',
        url: 'http://localhost:4000/activites',
        data: newActivite,
      })
      .then(response => {
        console.log(response);
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
      this.addActivite(newActivite);
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
    return (
      <NouvelleActivitePV
        filiereItems={filiereItems}
        moduleItems={moduleItems}
        usersItems={usersItems}
        typesActiviteItems={typesActiviteItems}
        submit={this.onSubmit}
      />
    );
  }
}

export default NouvelleActivitePC;
