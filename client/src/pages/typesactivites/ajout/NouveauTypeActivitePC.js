import React, {Component} from 'react';
import axios from 'axios';
import NouveauTypeActivitePV from './NouveauTypeActivitePV';

class NouveauTypeActivitePC extends Component {
  state = {};
  addTypeActivite = newTypeActivite => {
    axios
      .request({
        method: 'post',
        url: 'http://localhost:4000/type-activites',
        data: newTypeActivite,
      })
      .then(response => {
        console.log(response);
        this.props.history.push('/typesactivites');
      })
      .catch(err => console.log(err));
  };

  onSubmit = e => {
    console.log(e.target.name.value);

    const newTypeActivite = {
      name: e.target.name.value,
    };

    try {
      this.addTypeActivite(newTypeActivite);
    } catch (err) {
      console.log(err.message);
    }
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <NouveauTypeActivitePV submit={this.onSubmit} />
      </div>
    );
  }
}

export default NouveauTypeActivitePC;
