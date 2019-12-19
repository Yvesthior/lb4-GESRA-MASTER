import React from 'react';
import {Link} from 'react-router-dom';

const NouveauModulePV = () => {
  return (
    <div className="container">
      <br />
      <Link to="/enseignants" className="btn grey">
        Retour
      </Link>
      <h1 className="grey-text">Nouveau Module</h1>
      <form className="col s12 m12 lg12">
        <div class="row">
          <div class="input-field col s12">
            <input id="first_name" type="text" class="validate" />
            <label for="first_name">Nom</label>
          </div>
          <div class="input-field col s12">
            <input id="last_name" type="text" class="validate" />
            <label for="last_name">Description</label>
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

export default NouveauModulePV;
