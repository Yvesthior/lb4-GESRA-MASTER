import React from 'react';
import {Link} from 'react-router-dom';

const NouvelEnseignantPV = ({submit}) => {
  return (
    <div className="container">
      <br />
      <Link to="/profils" className="btn grey">
        Retour
      </Link>
      <h3 className="grey-text">Nouveau Profil</h3>
      <form onSubmit={submit} className="col s12 m12 lg12">
        <div class="row">
          <div class="input-field col s12">
            <input id="first_name" type="text" class="validate" />
            <label for="first_name">Nom</label>
          </div>
          <div class="input-field col s12">
            <input id="last_name" type="text" class="validate" />
            <label for="last_name">Prénom</label>
          </div>
          <div class="input-field col s12">
            <input id="email" type="email" class="validate" />
            <label for="email">Email</label>
          </div>
          <div class="input-field col s12">
            <select id="departement">
              <option value="" disabled selected>
                ---------
              </option>
              <option value="3">Departement</option>
            </select>
            <label>Département</label>
          </div>
          <div class="input-field col s12">
            <select id="type">
              <option value="" disabled selected>
                ---------
              </option>
              <option value="1">Chef de Département</option>
              <option value="2">Administrateur</option>
              <option value="3">Enseignant</option>
            </select>
            <label>Type de Profil</label>
          </div>
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

export default NouvelEnseignantPV;
