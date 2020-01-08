import React from 'react';
import {Link} from 'react-router-dom';

const ModifierTypeActivitePV = ({item, submit}) => {
  return (
    <div className="container">
      <br />
      <Link to="/typesactivites" className="btn grey">
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
              Type d'Activité
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

export default ModifierTypeActivitePV;
