import React from 'react';
import {Link} from 'react-router-dom';

const ModifierProfilPV = props => {
  return (
    <div className="container">
      <br />
      <Link to="/activites" className="btn grey">
        Retour
      </Link>
      <h3 className="grey-text">Modifier l'Activité</h3>
      <form onSubmit={props.submit} className="col s12 m12 lg12">
        <div className="row">
          <div className="input-field col s12">
            <input
              id="date_debut"
              type="date"
              className="validate"
              defaultValue={props.activite.date_debut}
            />
            <label htmlFor="date_debut" className="active">
              Date de Démarrage
            </label>
          </div>
          <div className="input-field col s12">
            <input
              id="date_fin"
              type="date"
              className="validate"
              defaultValue={props.activite.date_fin}
            />
            <label htmlFor="date-fin" className="active">
              Date Prévue de fin
            </label>
          </div>
          <div className="input-field col s12">
            <input
              id="commentaire"
              type="text"
              className="validate"
              defaultValue={props.activite.commentaires}
            />
            <label htmlFor="commentaire" className="active">
              Commentaire
            </label>
          </div>
          <div className="input-field col s12">
            <input
              id="volumeHoraire"
              type="number"
              className="validate"
              defaultValue={props.activite.volumeHoraire}
            />
            <label htmlFor="volumeHoraire" className="active">
              Volume Horaire
            </label>
          </div>
          <br />
          <label>Enseignant</label>
          <select id="user" className="browser-default">
            <option value={`${props.activite.usersId}`}>{props.user} </option>
            {props.usersItems}
          </select>
          <br />
          <label>Filière</label>
          <select id="filiere" className="browser-default">
            <option value={`${props.activite.filiereId}`}>
              {props.filiere}
            </option>
            {props.filiereItems}
          </select>
          <br />
          <label>Module</label>
          <select id="module" className="browser-default">
            <option value={`${props.activite.moduleId}`}>{props.module}</option>
            {props.moduleItems}
          </select>
          <br />
          <label>Type d'Activité</label>
          <select id="typeActivite" className="browser-default">
            <option value={`${props.activite.typeActivitesId}`}>
              {props.typeActivite}
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

export default ModifierProfilPV;
