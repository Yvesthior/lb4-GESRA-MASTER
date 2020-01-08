import React from 'react';
import {Link} from 'react-router-dom';

const NouvelleActivitePV = props => {
  return (
    <div className="container">
      <br />
      <Link to="/activites" className="btn grey">
        Retour
      </Link>
      <h3 className="grey-text">Nouvelle Activité</h3>
      <form onSubmit={props.submit} className="col s12 m12 lg12">
        <div className="row">
          <div className="input-field col s12">
            <input id="date_debut" type="date" className="validate" />
            <label htmlFor="date_debut">Date de Démarrage</label>
          </div>
          <div className="input-field col s12">
            <input id="date_fin" type="date" className="validate" />
            <label htmlFor="date-fin">Date Prévue de fin</label>
          </div>
          <div className="input-field col s12">
            <input id="commentaire" type="text" className="validate" />
            <label htmlFor="commentaire">Commentaire</label>
          </div>
          <div className="input-field col s12">
            <input id="volumeHoraire" type="number" className="validate" />
            <label htmlFor="volumeHoraire">Volume Horaire</label>
          </div>
          <br />
          <label>Enseignant</label>
          <select id="user" className="browser-default">
            <option value="" disabled defaultValue>
              --votre choix--
            </option>
            {props.usersItems}
          </select>
          <br />
          <label>Filière</label>
          <select id="filiere" className="browser-default">
            <option value="" disabled defaultValue>
              --votre choix--
            </option>
            {props.filiereItems}
          </select>
          <br />
          <label>Module</label>
          <select id="module" className="browser-default">
            <option value="" disabled defaultValue>
              --votre choix--
            </option>
            {props.moduleItems}
          </select>
          <br />
          <label>Type d'Activité</label>
          <select id="typeActivite" className="browser-default">
            <option value="" disabled defaultValue>
              --votre choix--
            </option>
            {props.typesActiviteItems}
          </select>
          <br />
          <div className="row">
            <input
              type="submit"
              value="Enregistrer"
              className="btn col s3 offset-s5"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default NouvelleActivitePV;
