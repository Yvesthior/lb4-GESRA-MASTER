import React from 'react';
import {Link} from 'react-router-dom';

const NouveauDepartementPV = props => {
  return (
    <div className="container">
      <br />
      <Link to="/departements" className="btn grey">
        Retour
      </Link>
      <h1 className="grey-text">Nouveau Département</h1>
      <form onSubmit={props.submit} className="col s12 m12 lg12">
        <div className="row">
          <div className="input-field col s12">
            <input id="name" type="text" className="validate" />
            <label htmlFor="name">Nom</label>
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

export default NouveauDepartementPV;
