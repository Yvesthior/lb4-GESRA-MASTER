import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class DepartementItem extends Component {
  constructor(props) {
    super();
    this.state = {
      item: props.item,
    };
  }

  onDelete = () => {
    let departementId = this.state.item.id;
    axios
      .delete(`http://localhost:4000/departements/${departementId}`)
      .then(response => {
        this.props.history.push('/departements');
      }, window.location.reload())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <tr>
        <td>{this.state.item.name}</td>
        <td>
          <Link to={`/departements/${this.state.item.id}`}>
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

export default DepartementItem;
