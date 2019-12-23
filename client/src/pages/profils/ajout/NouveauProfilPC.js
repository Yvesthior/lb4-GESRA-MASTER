import React, {Component} from 'react';
import axios from 'axios';
import NouveauProfilPV from './NouveauProfilPV';

class NouveauProfilPC extends Component {
  state = {
    departements: [],
  };

  UNSAFE_componentWillMount() {
    this.getDepartement();
  }

  getDepartement = () => {
    axios
      .get(`http://localhost:4000/departements`)
      .then(response => {
        this.setState(
          {
            departements: response.data,
          },
          () => console.log(this.state),
        );
      })
      .catch(err => console.log(err));
  };
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
    let departementsItems = this.state.departements.map((item, i) => {
      return (
        <option value={`${item.id}`} key={item.id}>
          {item.name}
        </option>
      );
    });
    return (
      <NouveauProfilPV
        departementsItems={departementsItems}
        submit={this.onSubmit}
      />
    );
  }
}

export default NouveauProfilPC;
