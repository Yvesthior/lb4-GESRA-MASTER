import React from 'react';
import {Link} from 'react-router-dom';

const ModulesPV = ({moduleItems}) => {
  return (
    <div className="col s12">
      <div className="row linecenter">
        <div className="col s8">
          <h3 className="grey-text text-left add"> Liste des Modules</h3>
        </div>
        <div className="col s4">
          <Link
            to="/modules/add"
            className="waves-effect waves-light btn-large left blue"
          >
            Ajouter un Module
          </Link>
        </div>
      </div>
      <br />
      <table className="centered col s10 m10 lg10">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Désignation</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>{moduleItems}</tbody>
      </table>

      <div className="fixed-action-btn">
        <Link to="/modules/add" className="btn-floating btn-large blue">
          <i className="fa fa-plus"></i>
        </Link>
      </div>
    </div>
  );
};

export default ModulesPV;
