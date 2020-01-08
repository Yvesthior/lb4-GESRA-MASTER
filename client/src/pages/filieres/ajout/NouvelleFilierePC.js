import React, {Component} from 'react';
import axios from 'axios';
import NouvelleFilierePV from './NouvelleFilierePV';

class NouvelleFilierePC extends Component {
  state = {};
  addFiliere = newFiliere => {
    axios
      .request({
        method: 'post',
        url: 'http://localhost:4000/filieres',
        data: newFiliere,
      })
      .then(response => {
        console.log(response);
        this.props.history.push('/filieres');
      })
      .catch(err => console.log(err));
  };

  onSubmit = e => {
    console.log(e.target.name.value);

    const newFiliere = {
      name: e.target.name.value,
      description: e.target.description.value,
    };

    try {
      this.addFiliere(newFiliere);
    } catch (err) {
      console.log(err.message);
    }
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <NouvelleFilierePV submit={this.onSubmit} />
      </div>
    );
  }
}

export default NouvelleFilierePC;
