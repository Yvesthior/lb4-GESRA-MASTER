import React, {Component} from 'react';
import axios from 'axios';
import ModifierProfilPV from './ModifierProfilPV';

class ModifierProfilPC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      type: '',
      departement: '',
    };
  }
  UNSAFE_componentWillMount() {
    this.getProfileDetails();
  }

  getProfileDetails() {
    let profileId = this.props.match.params.id;
    axios
      .get(`http://localhost:4000/users/${profileId}`)
      .then(response => {
        this.setState(
          {
            id: response.data.id,
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            email: response.data.email,
            type: response.data.type,
            departement: response.data.departementId,
          },
          () => console.log(this.state),
        );
      })
      .catch(err => console.log(err));
  }
  editProfile = newProfile => {
    axios
      .request({
        method: 'put',
        url: `http://localhost:4000/users/${this.state.id}`,
        data: newProfile,
      })
      .then(response => {
        this.props.history.push('/profils');
      })
      .catch(err => console.log(err));
  };

  onSubmit = e => {
    console.log(e.target.name.value);

    const newProfile = {
      firstName: e.target.first_name.value,
      lastName: e.target.last_name.value,
      email: e.target.email.value,
      type: parseInt(e.target.type.value),
      departementId: parseInt(e.target.departement.value),
    };

    try {
      this.editProfile(newProfile);
    } catch (err) {
      console.log(err.message);
    }
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <ModifierProfilPV item={this.state} submit={this.onSubmit} />
      </div>
    );
  }
}

export default ModifierProfilPC;
