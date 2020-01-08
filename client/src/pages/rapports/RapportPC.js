import React, {Component} from 'react';
import axios from 'axios';
import Activites from './RapportPV';
import ActiviteItem from './RapportItem';

class RapportActivitesPC extends Component {
  constructor() {
    super();
    this.state = {
      userId: 4,
      activites: [],
    };
  }

  UNSAFE_componentWillMount() {
    this.getActivites();
  }

  getActivites() {
    axios
      .get(`http://localhost:4000/users/${this.state.userId}/activites`)
      .then(response => {
        this.setState({
          activites: response.data,
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    let activites = this.state.activites.filter(item => {
      return item.status === 2;
    });
    const activiteItems = activites.map((activite, i) => {
      return <ActiviteItem item={activite} key={activite.id} />;
    });
    return <Activites activiteItems={activiteItems} />;
  }
}

export default RapportActivitesPC;
