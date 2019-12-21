import React, {Component} from 'react';
import axios from 'axios';
import ModifierModulePV from './ModifierModulePV';

class ModifierModulePC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      description: '',
    };
  }
  UNSAFE_componentWillMount() {
    this.getModuleDetails();
  }

  getModuleDetails() {
    let moduleId = this.props.match.params.id;
    axios
      .get(`http://localhost:4000/modules/${moduleId}`)
      .then(response => {
        this.setState(
          {
            id: response.data.id,
            name: response.data.name,
            description: response.data.description,
          },
          () => console.log(this.state),
        );
      })
      .catch(err => console.log(err));
  }
  editModule = newModule => {
    axios
      .request({
        method: 'put',
        url: `http://localhost:4000/modules/${this.state.id}`,
        data: newModule,
      })
      .then(response => {
        this.props.history.push('/modules');
      })
      .catch(err => console.log(err));
  };

  onSubmit = e => {
    console.log(e.target.name.value);

    const newModule = {
      name: e.target.name.value,
      description: e.target.description.value,
    };

    try {
      this.editModule(newModule);
    } catch (err) {
      console.log(err.message);
    }
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <ModifierModulePV item={this.state} submit={this.onSubmit} />
      </div>
    );
  }
}

export default ModifierModulePC;
