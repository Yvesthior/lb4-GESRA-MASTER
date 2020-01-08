import React, {Component} from 'react';
import axios from 'axios';
import ProfileDetailsPV from './ProfileDetailsPV';

class ProfileDetailsPC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      type: '',
      departement: '',
      departementName: '',
    };
  }

  UNSAFE_componentWillMount() {
    this.getProfileDetails();
    this.getDepartement();
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

  getDepartement = () => {
    // let departement = this.state.item.departementId;
    let userId = this.props.match.params.id;

    axios
      .get(`http://localhost:4000/users/${userId}/departement`)
      .then(response => {
        this.setState(
          {
            departementName: response.data.name,
          },
          () => console.log(this.state),
        );
      })
      .catch(err => console.log(err));
  };

  render() {
    let type = this.state.type;
    if (type === 1) {
      type = 'Enseignant';
    }

    if (type === 2) {
      type = 'Chef de Département';
    }
    if (type === 3) {
      type = 'Administrateur';
    }

    return (
      <div>
        <ProfileDetailsPV item={this.state} type={type} />
      </div>
    );
  }
}

export default ProfileDetailsPC;
