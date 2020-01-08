import React, {Component} from 'react';
import axios from 'axios';
import MesActivites from './MesActivitesPV';
import MesActivitesItem from './MesActivitesItem';

class MesActivitesPC extends Component {
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
    const activiteItems = this.state.activites.map((activite, i) => {
      return <MesActivitesItem item={activite} key={activite.id} />;
    });
    return <MesActivites activiteItems={activiteItems} />;
  }
}

export default MesActivitesPC;
