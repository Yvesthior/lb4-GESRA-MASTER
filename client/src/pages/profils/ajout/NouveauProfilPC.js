import React, {Component} from 'react';
import axios from 'axios';
import NouveauProfilPV from './NouveauProfilPV';

class NouvelEnseignantPC extends Component {
  state = {};
  addUser = newUser => {
    axios
      .request({
        method: 'post',
        url: 'http://localhost:4000/users',
        data: newUser,
      })
      .then(response => {
        console.log(response);
        this.props.history.push('/profils');
      })
      .catch(err => console.log(err));
  };

  onSubmit = e => {
    console.log(e.target.name.value);

    const newUser = {
      firstName: e.target.first_name.value,
      lastName: e.target.last_name.value,
      email: e.target.email.value,
      password: e.target.email.value,
      type: parseInt(e.target.type.value),
      departementId: parseInt(e.target.departement.value),
    };
    try {
      this.addUser(newUser);
    } catch (err) {
      console.log(err.message);
    }
    e.preventDefault();
  };
  render() {
    return <NouveauProfilPV submit={this.onSubmit} />;
  }
}

export default NouvelEnseignantPC;
