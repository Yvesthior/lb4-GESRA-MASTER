import React from 'react';
import {Link} from 'react-router-dom';

const ActivitesPV = ({activiteItems}) => {
  return (
    <div className="col s12">
      <div className="row linecenter">
        <div className="col s8">
          <Link to="/profils/4/activites" className="btn grey">
            Retour
          </Link>
          <br />
          <br />
          <h3 className="grey-text text-left add">
            {' '}
            Liste des Activités Closes
          </h3>
        </div>
      </div>
      <table className="centered col s10 m10 lg10">
        <thead>
          <tr>
            <th>Type d'Activité</th>
            <th>Date de Démarrage</th>
            <th>Date de Fin</th>
            <th>Filière</th>
            <th>Module</th>
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
