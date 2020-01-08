import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class MesActivitesItem extends Component {
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

  render() {
    return (
      <tr>
        <td>{this.state.typeActivite}</td>
        <td>{this.state.item.date_debut}</td>
        <td>{this.state.filiere}</td>
        <td>
          <Link
            to={`/profils/${this.state.item.usersId}/activites/${this.state.item.id}`}
          >
            <div
              style={{marginRight: 3}}
              className=" waves-effects waves-light btn-small green"
            >
              <i className="fas fa-eye"></i> Détails
            </div>
          </Link>
        </td>
      </tr>
    );
  }
}

export default MesActivitesItem;
