import React from 'react';
import {Link} from 'react-router-dom';

const ActiviteDetailsPV = props => {
  return (
    <div>
      {' '}
      <br />
      <div className="container">
        <Link to="/activites" className="btn grey">
          Retour
        </Link>
        <h2 className="grey-text">{props.activite.commentaires}</h2>
        <ul className="collection">
          <li className="collection-item">Module: {props.module}</li>
          <li className="collection-item">Filière : {props.filiere}</li>
          <li className="collection-item">
            Volume Horaire : {props.activite.volumeHoraire} heures
          </li>
          <li className="collection-item">
            Date de démarrage : {props.activite.date_debut}
          </li>
          <li className="collection-item">
            Type D'activité: {props.typeActivite}
          </li>
          <li className="collection-item">Enseignant: {props.user}</li>
          <li className="collection-item">Statut: {props.status}</li>
        </ul>
        <Link to={`/activites/${props.activite.id}/edit`}>
          <div className=" waves-effects waves-light btn-small green left">
            <i className="fas fa-edit"></i> Modifier
          </div>
        </Link>
        <button
          className=" waves-effects waves-light btn-small red right"
          onClick={props.onDelete}
        >
          <i className="fas fa-trash-alt"></i> Supprimer
        </button>
      </div>
    </div>
  );
};

export default ActiviteDetailsPV;
