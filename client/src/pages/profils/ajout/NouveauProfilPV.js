import React from 'react';
import {Link} from 'react-router-dom';

const NouvelEnseignantPV = () => {
  return (
    <div className="container">
      <br />
      <Link to="/enseignants" className="btn grey">
        Retour
      </Link>
      <h1 className="grey-text">Nouveau Profil</h1>
      <form className="col s12 m12 lg12">
        <div class="input-field col s12">
          <select>
            <option value="" disabled selected>
              Choose your option
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
          <label>Materialize Select</label>
        </div>

        <input type="submit" value="Save" className="btn" />
      </form>
    </div>
  );
};

export default NouvelEnseignantPV;
