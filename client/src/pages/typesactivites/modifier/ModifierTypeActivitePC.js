import React, {Component} from 'react';
import axios from 'axios';
import ModifierTypeActivitePV from './ModifierTypeActivitePV';

class ModifierTypeActivitePC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
    };
  }
  UNSAFE_componentWillMount() {
    this.getTypeActiviteDetails();
  }

  getTypeActiviteDetails() {
    let typeactiviteId = this.props.match.params.id;
    axios
      .get(`http://localhost:4000/type-activites/${typeactiviteId}`)
      .then(response => {
        this.setState(
          {
            id: response.data.id,
            name: response.data.name,
          },
          () => console.log(this.state),
        );
      })
      .catch(err => console.log(err));
  }
  editTypeactivite = newTypeactivite => {
    axios
      .request({
        method: 'put',
        url: `http://localhost:4000/type-activites/${this.state.id}`,
        data: newTypeactivite,
      })
      .then(response => {
        this.props.history.push('/typesactivites');
      })
      .catch(err => console.log(err));
  };

  onSubmit = e => {
    console.log(e.target.name.value);

    const newTypeactivite = {
      name: e.target.name.value,
    };

    try {
      this.editTypeactivite(newTypeactivite);
    } catch (err) {
      console.log(err.message);
    }
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <ModifierTypeActivitePV item={this.state} submit={this.onSubmit} />
      </div>
    );
  }
}

export default ModifierTypeActivitePC;
