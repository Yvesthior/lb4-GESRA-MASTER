import React from 'react';
import {Link} from 'react-router-dom';

const MesActiviteDetailsPV = props => {
  return (
    <div>
      {' '}
      <br />
      <div className="container">
        <Link to="/profils/4/activites" className="btn grey">
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
        </ul>
        <form onSubmit={props.submit} className="col s12 m12 lg12">
          <div className="row">
            <div className="input-field col s12">
              <input
                id="date_fin"
                type="date"
                className="validate"
                defaultValue={props.activite.date_fin}
              />
              <label htmlFor="date-fin" className="active">
                Date de fin
              </label>
            </div>

            <button
              class="btn waves-effect waves-light red right"
              type="submit"
              name="action"
            >
              Clôturer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MesActiviteDetailsPV;
