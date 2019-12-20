import React, {Component} from 'react';
import axios from 'axios';
import ModifierDepartementPV from './ModifierDepartementPV';

class ModifierDepartementPC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
    };
  }
  UNSAFE_componentWillMount() {
    this.getDepartementDetails();
  }

  getDepartementDetails() {
    let departementId = this.props.match.params.id;
    axios
      .get(`http://localhost:4000/departements/${departementId}`)
      .then(response => {
        this.setState(
          {
            id: response.data.id,
            name: response.data.name,
          },
          () => console.log(this.state),
        );
      })
      .catch(err => console.log(err));
  }
  editDepartement = newDepartement => {
    axios
      .request({
        method: 'put',
        url: `http://localhost:4000/departements/${this.state.id}`,
        data: newDepartement,
      })
      .then(response => {
        this.props.history.push('/departements');
      })
      .catch(err => console.log(err));
  };

  onSubmit = e => {
    console.log(e.target.name.value);

    const newDepartement = {
      name: e.target.name.value,
    };

    try {
      this.editDepartement(newDepartement);
    } catch (err) {
      console.log(err.message);
    }
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <ModifierDepartementPV item={this.state} submit={this.onSubmit} />
      </div>
    );
  }
}

export default ModifierDepartementPC;
