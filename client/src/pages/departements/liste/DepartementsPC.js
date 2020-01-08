import React, {Component} from 'react';
import axios from 'axios';
import Departements from './DepartementsPV';
import DepartementItem from './DepartementItem';

class DepartementsPC extends Component {
  constructor() {
    super();
    this.state = {
      departements: [],
    };
  }

  UNSAFE_componentWillMount() {
    this.getDepartements();
  }

  getDepartements() {
    axios
      .get('http://localhost:4000/departements')
      .then(response => {
        this.setState({
          departements: response.data,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    // console.log(this.state);
    const departementItems = this.state.departements.map((departement, i) => {
      return <DepartementItem item={departement} key={departement.id} />;
    });
    return (
      <div>
        <Departements departementItems={departementItems} />
      </div>
    );
  }
}

export default DepartementsPC;
