import React from 'react';
import {Link} from 'react-router-dom';

const ActivitesPV = ({activiteItems}) => {
  return (
    <div className="col s12">
      <div className="row linecenter">
        <div className="col s8">
          <h3 className="grey-text text-left add"> Liste des Profils</h3>
        </div>
        <div className="col s4">
          <Link
            to="/profils/add"
            className="waves-effect waves-light btn-large left blue"
          >
            Ajouter un Profil
          </Link>
        </div>
      </div>
      <br />
      <table className="centered col s10 m10 lg10">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Département</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>{activiteItems}</tbody>
      </table>

      <div className="fixed-action-btn">
        <Link to="/profils/add" className="btn-floating btn-large blue">
          <i className="fa fa-plus"></i>
        </Link>
      </div>
    </div>
  );
};

export default ActivitesPV;
