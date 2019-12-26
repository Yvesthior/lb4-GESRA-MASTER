import React, {Component} from 'react';
import axios from 'axios';

class ActiviteItem extends Component {
  constructor(props) {
    super();
    this.state = {
      item: props.item,
      user: '',
      module: '',
      filiere: '',
      typeActivite: '',
    };
  }
  UNSAFE_componentWillMount() {
    this.getActivite();
  }
  getActivite() {
    let activiteId = this.state.item.id;
    let userId = this.state.item.usersId;
    const filiere = axios.get(
      `http://localhost:4000/activites/${activiteId}/filiere`,
    );
    const module = axios.get(
      `http://localhost:4000/activites/${activiteId}/module`,
    );
    const typeactivite = axios.get(
      `http://localhost:4000/activites/${activiteId}/type-activites`,
    );
    const user = axios.get(`http://localhost:4000/users/${userId}`);

    axios
      .all([user, filiere, module, typeactivite])
      .then(
        axios.spread((...responses) => {
          let name = ` ${responses[0].data.lastName} ${responses[0].data.firstName}`;
          this.setState({
            user: name,
            filiere: responses[1].data.name,
            module: responses[2].data.name,
            typeActivite: responses[3].data.name,
          });
        }),
      )
      .catch(errors => {
        // react on errors
        console.error(errors.message);
      });
  }

  onDelete = () => {
    let activiteId = this.state.item.id;
    axios
      .delete(`http://localhost:4000/activites/${activiteId}`)
      .then(response => {
        this.props.history.push('/activites');
      }, window.location.reload())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <tr>
        <td>{this.state.typeActivite}</td>
        <td>{this.state.item.date_debut}</td>
        <td>{this.state.item.date_fin}</td>
        <td>{this.state.filiere}</td>
        <td>{this.state.module}</td>
      </tr>
    );
  }
}

export default ActiviteItem;
