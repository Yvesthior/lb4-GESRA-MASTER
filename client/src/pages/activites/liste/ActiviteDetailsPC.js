import React, {Component} from 'react';
import axios from 'axios';
import ActiviteDetailsPV from './ActiviteDetailsPV';

class ActiviteDetailsPC extends Component {
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

  onDelete = () => {
    let activiteId = this.state.item.id;
    axios
      .delete(`http://localhost:4000/activites/${activiteId}`)
      .then(response => {
        this.props.history.push('/activites');
      })
      .catch(err => console.log(err));
  };
  render() {
    let status = this.state.activite.status;
    if (status === 1) {
      status = 'En Cours';
    }
    if (status === 2) {
      status = 'Terminée';
    }
    let {activite, user, filiere, module, typeActivite} = this.state;
    return (
      <div>
        <ActiviteDetailsPV
          activite={activite}
          user={user}
          filiere={filiere}
          module={module}
          status={status}
          typeActivite={typeActivite}
        />
      </div>
    );
  }
}

export default ActiviteDetailsPC;
