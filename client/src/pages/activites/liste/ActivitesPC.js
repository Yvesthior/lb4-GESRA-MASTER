import React, {Component} from 'react';
import axios from 'axios';
import Activites from './ActivitesPV';
import ActiviteItem from './ActiviteItem';

class ActivitesPC extends Component {
  constructor() {
    super();
    this.state = {
      activites: [],
    };
  }

  UNSAFE_componentWillMount() {
    this.getActivites();
  }

  getActivites() {
    axios
      .get('http://localhost:4000/activites')
      .then(response => {
        this.setState({
          activites: response.data,
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const activiteItems = this.state.activites.map((activite, i) => {
      return <ActiviteItem item={activite} key={activite.id} />;
    });
    return <Activites activiteItems={activiteItems} />;
  }
}

export default ActivitesPC;
