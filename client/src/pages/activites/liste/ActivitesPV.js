import React from 'react';
import {Link} from 'react-router-dom';

const ActivitesPV = ({activiteItems}) => {
  return (
    <div className="col s12">
      <div className="row linecenter">
        <div className="col s8">
          <h3 className="grey-text text-left add"> Liste des Activités</h3>
        </div>
        <div className="col s4">
          <Link
            to="/activites/add"
            className="waves-effect waves-light btn-large left blue"
          >
            Ajouter une Activité
          </Link>
        </div>
      </div>
      <br />
      <table className="centered col s10 m10 lg10">
        <thead>
          <tr>
            <th>Type d'Activité</th>
            <th>Date de Démarrage</th>
            <th>Filière</th>
            <th>Enseignant</th>
            <th>Statut</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>{activiteItems}</tbody>
      </table>

      <div className="fixed-action-btn">
        <Link to="/activites/add" className="btn-floating btn-large blue">
          <i className="fa fa-plus"></i>
        </Link>
      </div>
    </div>
  );
};

export default ActivitesPV;
