import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class ProfileItem extends Component {
  constructor(props) {
    super();
    this.state = {
      item: props.item,
      departement: '',
    };
  }
  UNSAFE_componentWillMount() {
    this.getDepartement();
  }
  onDelete = () => {
    let userId = this.state.item.id;
    axios
      .delete(`http://localhost:4000/users/${userId}`)
      .then(response => {
        this.props.history.push('/profiles');
      }, window.location.reload())
      .catch(err => console.log(err));
  };

  getDepartement = () => {
    // let departement = this.state.item.departementId;
    let userId = this.state.item.id;

    axios
      .get(`http://localhost:4000/users/${userId}/departement`)
      .then(response => {
        this.setState({
          departement: response.data.name,
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const {firstName, lastName, email} = this.state.item;
    return (
      <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td>{this.state.departement}</td>
        <td>
          <Link to={`/profils/${this.state.item.id}`}>
            <div
              style={{marginRight: 3}}
              className=" waves-effects waves-light btn-small green"
            >
              <i className="fas fa-eye"></i> Profil
            </div>
          </Link>
          <Link to={`/profils/${this.state.item.id}`}>
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

export default ProfileItem;
