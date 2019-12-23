import React, {Component} from 'react';
import axios from 'axios';
import ModifierActivitePV from './ModifierActivitePV';

class ModifierActivitePC extends Component {
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
      departements: [],
    };
  }
  UNSAFE_componentWillMount() {
    this.getProfileDetails();
    this.getDepartement();
    this.getDepartements();
  }

  getDepartements = () => {
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
    let departementsItems = this.state.departements.map((item, i) => {
      return (
        <option value={`${item.id}`} key={item.id}>
          {item.name}
        </option>
      );
    });

    return (
      <div>
        <ModifierActivitePV
          departementsItems={departementsItems}
          item={this.state}
          type={type}
          submit={this.onSubmit}
        />
      </div>
    );
  }
}

export default ModifierActivitePC;
