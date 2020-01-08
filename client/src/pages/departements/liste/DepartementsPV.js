import React from 'react';
import {Link} from 'react-router-dom';

const DepartementsPV = ({departementItems}) => {
  return (
    <div className="col s12">
      <div className="row linecenter">
        <div className="col s8">
          <h3 className="grey-text text-left add"> Liste des Départements</h3>
        </div>
        <div className="col s4">
          <Link
            to="/departements/add"
            className="waves-effect waves-light btn-large left blue"
          >
            Ajouter un Département
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

        <tbody>{departementItems}</tbody>
      </table>

      <div className="fixed-action-btn">
        <Link to="/departements/add" className="btn-floating btn-large blue">
          <i className="fa fa-plus"></i>
        </Link>
      </div>
    </div>
  );
};

export default DepartementsPV;
