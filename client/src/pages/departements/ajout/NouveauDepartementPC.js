import React, {Component} from 'react';
import axios from 'axios';
import NouveauDepartementPV from './NouveauDepartementPV';

class NouveauDepartementPC extends Component {
  state = {};
  addDepartement = newDepartement => {
    axios
      .request({
        method: 'post',
        url: 'http://localhost:4000/departements',
        data: newDepartement,
      })
      .then(response => {
        console.log(response);
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
      this.addDepartement(newDepartement);
    } catch (err) {
      console.log(err.message);
    }
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <NouveauDepartementPV submit={this.onSubmit} />
      </div>
    );
  }
}

export default NouveauDepartementPC;
