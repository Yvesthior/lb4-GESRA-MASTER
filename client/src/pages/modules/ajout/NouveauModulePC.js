import React, {Component} from 'react';
import axios from 'axios';
import NouveauModulePV from './NouveauModulePV';

class NouveauModulePC extends Component {
  state = {
    error: '',
  };
  addModule = newModule => {
    axios
      .request({
        method: 'post',
        url: 'http://localhost:4000/modules',
        data: newModule,
      })
      .then(response => {
        console.log(response);
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
      this.addModule(newModule);
    } catch (err) {
      console.log(err.message);
    }
    e.preventDefault();
  };
  render() {
    return (
      <div>
        {/* {this.state.error ? <Erreur message={this.state.error} /> : ''} */}
        <NouveauModulePV submit={this.onSubmit} />
      </div>
    );
  }
}

export default NouveauModulePC;
