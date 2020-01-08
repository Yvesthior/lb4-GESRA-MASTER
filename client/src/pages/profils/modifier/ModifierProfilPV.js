import React from 'react';
import {Link} from 'react-router-dom';

const ModifierProfilPV = ({item, submit, type, departementsItems}) => {
  return (
    <div className="container">
      <br />
      <Link to="/profils" className="btn grey">
        Retour
      </Link>
      <h3 className="grey-text">Modifier le Profil</h3>
      <form onSubmit={submit} className="col s12 m12 lg12">
        <div className="row">
          <div className="input-field col s12">
            <input
              id="first_name"
              type="text"
              className="validate"
              defaultValue={item.firstName}
            />
            <label htmlFor="first_name" className="active">
              Nom
            </label>
          </div>
          <div className="input-field col s12">
            <input
              id="last_name"
              type="text"
              className="validate"
              defaultValue={item.lastName}
            />
            <label htmlFor="last_name" className="active">
              Prénom
            </label>
          </div>
          <div className="input-field col s12">
            <input
              id="email"
              type="email"
              className="validate"
              defaultValue={item.email}
            />
            <label htmlFor="email" className="active">
              Email
            </label>
          </div>
          <label>Département</label>
          <select id="departement" className="browser-default">
            <option value={`${item.departement}`}>
              {item.departementName}
            </option>
            {departementsItems}
          </select>
          <label>Type</label>
          <select id="type" className="browser-default">
            <option value={`${item.type}`}>{type}</option>
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
