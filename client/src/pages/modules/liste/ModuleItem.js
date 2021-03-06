import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class ModuleItem extends Component {
  constructor(props) {
    super();
    this.state = {
      item: props.item,
    };
  }

  onDelete = () => {
    let moduleId = this.state.item.id;
    axios
      .delete(`http://localhost:4000/modules/${moduleId}`)
      .then(response => {
        this.props.history.push('/modules');
      }, window.location.reload())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <tr>
        <td>{this.state.item.name}</td>
        <td>{this.state.item.description}</td>
        <td>
          <Link to={`/modules/${this.state.item.id}`}>
            <div
              style={{marginRight: 3}}
              className=" waves-effects waves-light btn-small green"
            >
              <i className="fas fa-edit"></i> Modifier
            </div>
          </Link>
          <button
            className=" waves-effects waves-light btn-small red"
            onClick={this.onDelete}
          >
            <i className="fas fa-trash-alt"></i> Supprimer
          </button>
        </td>
      </tr>
    );
  }
}

export default ModuleItem;
