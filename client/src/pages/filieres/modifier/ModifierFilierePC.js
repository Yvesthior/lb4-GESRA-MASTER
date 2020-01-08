import React, {Component} from 'react';
import axios from 'axios';
import ModifierFilierePV from './ModifierFilierePV';

class ModifierFilierePC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      description: '',
    };
  }
  UNSAFE_componentWillMount() {
    this.getFiliereDetails();
  }

  getFiliereDetails() {
    let filiereId = this.props.match.params.id;
    axios
      .get(`http://localhost:4000/filieres/${filiereId}`)
      .then(response => {
        this.setState(
          {
            id: response.data.id,
            name: response.data.name,
            description: response.data.description,
          },
          () => console.log(this.state),
        );
      })
      .catch(err => console.log(err));
  }
  editFiliere = newFiliere => {
    axios
      .request({
        method: 'put',
        url: `http://localhost:4000/filieres/${this.state.id}`,
        data: newFiliere,
      })
      .then(response => {
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
      this.editFiliere(newFiliere);
    } catch (err) {
      console.log(err.message);
    }
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <ModifierFilierePV item={this.state} submit={this.onSubmit} />
      </div>
    );
  }
}

export default ModifierFilierePC;
