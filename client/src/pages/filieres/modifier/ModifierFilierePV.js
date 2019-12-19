import React from 'react';
import {Link} from 'react-router-dom';

const ModifierFilierePV = () => {
  return (
    <div className="container">
      <br />
      <Link to="/filieres" className="btn grey">
        Retour
      </Link>
      <h2 className="grey-text">LPTI 1</h2>
      <form className="col s12 m12 lg12">
        <div class="row">
          <div class="input-field col s12">
            <input
              id="name"
              type="text"
              class="validate"
              defaultValue="LPTI1"
            />
            <label for="name">Nom</label>
          </div>
          <div class="input-field col s12">
            <input
              id="description"
              type="text"
              class="validate"
              defaultValue="Licence Professionnelle en Téleécommunication et Informatique"
            />
            <label for="description">Description</label>
          </div>
          <div className="row">
            <input
              type="submit"
              value="Modifier"
              className="btn col s3 offset-s5"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModifierFilierePV;
