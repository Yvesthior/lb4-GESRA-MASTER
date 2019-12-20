import React from 'react';
import {Link} from 'react-router-dom';

const ModifierDepartementPV = ({item, submit}) => {
  return (
    <div className="container">
      <br />
      <Link to="/departements" className="btn grey">
        Retour
      </Link>
      <h2 className="grey-text">Département {item.name}</h2>
      <form onSubmit={submit} className="col s12 m12 lg12">
        <div className="row">
          <div className="input-field col s12">
            <input
              id="name"
              type="text"
              className="validate"
              defaultValue={item.name}
            />
            <label htmlFor="name">Département</label>
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

export default ModifierDepartementPV;
