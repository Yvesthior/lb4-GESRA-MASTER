import React from 'react';
import {Link} from 'react-router-dom';

const TypesActivitesPV = ({typeactiviteItems}) => {
  return (
    <div className="col s12">
      <div className="row linecenter">
        <div className="col s8">
          <h3 className="grey-text text-left add">
            {' '}
            Liste des Types D'activité
          </h3>
        </div>
        <div className="col s4">
          <Link
            to="/typesactivites/add"
            className="waves-effect waves-light btn-large left blue"
          >
            Ajouter un Type D'Activité
          </Link>
        </div>
      </div>
      <br />
      <table className="centered col s10 m10 lg10">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>{typeactiviteItems}</tbody>
      </table>

      <div className="fixed-action-btn">
        <Link to="/typesactivites/add" className="btn-floating btn-large blue">
          <i className="fa fa-plus"></i>
        </Link>
      </div>
    </div>
  );
};

export default TypesActivitesPV;
