import React, {Component} from 'react';
import axios from 'axios';
import FilieresPV from './FilieresPV';
import FiliereItem from './FiliereItem';

class DepartementsPC extends Component {
  constructor() {
    super();
    this.state = {
      filieres: [],
    };
  }

  UNSAFE_componentWillMount() {
    this.getFilieres();
  }

  getFilieres() {
    axios
      .get('http://localhost:4000/filieres')
      .then(response => {
        this.setState({
          filieres: response.data,
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const filiereItems = this.state.filieres.map((filiere, i) => {
      return <FiliereItem item={filiere} key={filiere.id} />;
    });
    return (
      <div>
        <FilieresPV filiereItems={filiereItems} />
      </div>
    );
  }
}

export default DepartementsPC;
