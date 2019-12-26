import React, {Component} from 'react';
import axios from 'axios';
import ActiviteDetailsPV from './MesActivitesDetailsPV';

class MesActiviteDetailsPC extends Component {
  state = {
    activite: [],
    user: '',
    filiere: '',
    module: '',
    typeActivite: '',
  };

  componentWillMount() {
    this.getActiviteDetails();
  }

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
        this.props.history.push('/profils/4/activites');
      })
      .catch(err => console.log(err));
  };

  onSubmit = e => {
    console.log(e.target.name.value);

    const newActivite = {
      date_debut: this.state.activite.date_debut,
      date_fin: e.target.date_fin.value.toString(),
      volumeHoraire: this.state.activite.volumeHoraire,
      commentaires: this.state.activite.commentaires,
      moduleId: this.state.activite.moduleId,
      typeActivitesId: this.state.activite.typeActivitesId,
      filiereId: this.state.activite.filiereId,
      usersId: this.state.activite.usersId,
      status: 2,
    };
    try {
      this.editActivite(newActivite);
    } catch (err) {
      console.log(err.message);
    }
    e.preventDefault();
  };
  render() {
    let {activite, user, filiere, module, typeActivite} = this.state;
    return (
      <div>
        <ActiviteDetailsPV
          activite={activite}
          user={user}
          filiere={filiere}
          module={module}
          typeActivite={typeActivite}
          submit={this.onSubmit}
        />
      </div>
    );
  }
}

export default MesActiviteDetailsPC;
