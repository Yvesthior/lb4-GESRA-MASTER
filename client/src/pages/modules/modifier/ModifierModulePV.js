import React from 'react';
import {Link} from 'react-router-dom';

const ModifierModulePV = ({item, submit}) => {
  return (
    <div className="container">
      <br />
      <Link to="/modules" className="btn grey">
        Retour
      </Link>
      <h2 className="grey-text">{item.name}</h2>
      <form onSubmit={submit} className="col s12 m12 lg12">
        <div class="row">
          <div class="input-field col s12">
            <input
              id="name"
              type="text"
              class="validate"
              defaultValue={item.name}
            />
            <label for="name" className="active">
              Nom du Module
            </label>
          </div>
          <div class="input-field col s12">
            <input
              id="description"
              type="text"
              class="validate"
              defaultValue={item.description}
            />
            <label for="description" className="active">
              Désignation du Module
            </label>
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

export default ModifierModulePV;
