import React from 'react';
import {Link} from 'react-router-dom';

const ModifierFilierePV = ({item, submit}) => {
  return (
    <div className="container">
      <br />
      <Link to="/filieres" className="btn grey">
        Retour
      </Link>
      <h2 className="grey-text">{item.name}</h2>
      <form onSubmit={submit} className="col s12 m12 lg12">
        <div className="row">
          <div className="input-field col s12">
            <input
              id="name"
              type="text"
              className="validate"
              defaultValue={item.name}
            />
            <label htmlFor="name" className="active">
              Nom de la Filière
            </label>
          </div>
          <div className="input-field col s12">
            <input
              id="description"
              type="text"
              className="validate"
              defaultValue={item.description}
            />
            <label htmlFor="description" className="active">
              Désignation
            </label>
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
