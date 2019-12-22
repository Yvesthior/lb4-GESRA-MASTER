import React, {Component} from 'react';
import axios from 'axios';
import Profils from './ProfilsPV';
import ProfileItem from './ProfileItem';

class ProfilsPC extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  UNSAFE_componentWillMount() {
    this.getUsers();
  }

  getUsers() {
    axios
      .get('http://localhost:4000/users')
      .then(response => {
        this.setState({
          users: response.data,
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const profilItems = this.state.users.map((user, i) => {
      return <ProfileItem item={user} key={user.id} />;
    });
    return <Profils profilItems={profilItems} />;
  }
}

export default ProfilsPC;
