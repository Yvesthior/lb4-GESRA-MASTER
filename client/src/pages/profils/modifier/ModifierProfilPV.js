import React from 'react';
import {Link} from 'react-router-dom';

const ModifierProfilPV = ({item, submit}) => {
  return (
    <div className="container">
      <br />
      <Link to="/profils" className="btn grey">
        Retour
      </Link>
      <h3 className="grey-text">Modifier le Profil</h3>
      <form onSubmit={submit} className="col s12 m12 lg12">
        <div class="row">
          <div class="input-field col s12">
            <input
              id="first_name"
              type="text"
              class="validate"
              defaultValue={item.firstName}
            />
            <label for="first_name" className="active">
              Nom
            </label>
          </div>
          <div class="input-field col s12">
            <input
              id="last_name"
              type="text"
              class="validate"
              defaultValue={item.lastName}
            />
            <label for="last_name" className="active">
              Prénom
            </label>
          </div>
          <div class="input-field col s12">
            <input
              id="email"
              type="email"
              class="validate"
              defaultValue={item.email}
            />
            <label for="email" className="active">
              Email
            </label>
          </div>
          <label>Département</label>
          <select id="departement" className="browser-default">
            <option value={item.departement}>
              {item.departement} qulaedsfs
            </option>
            <option value="1">Département 1</option>
            <option value="2">Département 2</option>
            <option value="3">Département 3</option>
          </select>
          <label>Type</label>
          <select id="type" className="browser-default">
            <option value={item.type}>{item.type}</option>
            <option value="1">Enseignant</option>
            <option value="2">Chef de Département</option>
            <option value="3">Administrateur</option>
          </select>

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

export default ModifierProfilPV;
