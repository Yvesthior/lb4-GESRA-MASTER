import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class TypeActiviteItem extends Component {
  constructor(props) {
    super();
    this.state = {
      item: props.item,
    };
  }

  onDelete = () => {
    let typeactiviteId = this.state.item.id;
    axios
      .delete(`http://localhost:4000/type-activites/${typeactiviteId}`)
      .then(response => {
        this.props.history.push('/typesactivites');
      }, window.location.reload())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <tr>
        <td>{this.state.item.name}</td>
        <td>
          <Link to={`/typesactivites/${this.state.item.id}`}>
            <button
              style={{marginRight: 3}}
              className=" waves-effects waves-light btn-small green"
            >
              <i className="fas fa-edit"></i> Modifier
            </button>
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

export default TypeActiviteItem;
