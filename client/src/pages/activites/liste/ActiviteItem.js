import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class ActiviteItem extends Component {
  constructor(props) {
    super();
    this.state = {
      item: props.item,
      user: '',
      module: '',
      filiere: '',
      typeActivite: '',
    };
  }
  UNSAFE_componentWillMount() {
    this.getActivite();
  }
  getActivite() {
    let activiteId = this.state.item.id;
    let userId = this.state.item.usersId;
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
      }, window.location.reload())
      .catch(err => console.log(err));
  };

  render() {
    let status = this.state.item.status;

    if (status === 1) {
      status = 'En Cours';
    }
    if (status === 2) {
      status = 'Terminée';
    }
    return (
      <tr>
        <td>{this.state.typeActivite}</td>
        <td>{this.state.item.date_debut}</td>
        <td>{this.state.filiere}</td>
        <td>{this.state.user}</td>
        <td>{status}</td>
        <td>
          <Link to={`/activites/${this.state.item.id}`}>
            <div
              style={{marginRight: 3}}
              className=" waves-effects waves-light btn-small green"
            >
              <i className="fas fa-eye"></i> Détails
            </div>
          </Link>
          <Link to={`/activites/${this.state.item.id}/edit`}>
            <div
              style={{marginRight: 3}}
              className=" waves-effects waves-light btn-small green"
            >
              <i className="fas fa-edit"></i> Modifier
            </div>
          </Link>

          <button
            className=" waves-effects waves-light btn-small red"
            onClick={this.onDelete}
          >
            <i className="fas fa-trash-alt"></i> Supprimer
          </button>
        </td>
      </tr>
    );
  }
}

export default ActiviteItem;
