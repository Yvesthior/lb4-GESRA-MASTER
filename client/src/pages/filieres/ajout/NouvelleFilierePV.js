import React from 'react';
import {Link} from 'react-router-dom';

const NouvelleFilierePV = ({submit}) => {
  return (
    <div className="container">
      <br />
      <Link to="/filieres" className="btn grey">
        Retour
      </Link>
      <h1 className="grey-text">Nouvelle Filière</h1>
      <form onSubmit={submit} className="col s12 m12 lg12">
        <div className="row">
          <div className="input-field col s12">
            <input id="name" type="text" className="validate" />
            <label htmlFor="name">Nom</label>
          </div>
          <div className="input-field col s12">
            <input id="description" type="text" className="validate" />
            <label htmlFor="description">Designation</label>
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

export default NouvelleFilierePV;
