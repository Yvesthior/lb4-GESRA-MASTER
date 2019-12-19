import React from 'react';
import {Link} from 'react-router-dom';

const LoginPV = () => {
  return (
    <div className="container">
      <div className="row m-b-none">
        <h2 className="center-align grey-text darken-4">Connexion</h2>
        <form>
          <div className="input-field">
            <input className="validate" type="email" name="email" id="email" />
            <label htmlFor="email">Identifiant</label>
          </div>
          <div className="input-field col s12 padder-x">
            <input
              className="validate"
              type="password"
              name="password"
              id="password"
            />
            <label htmlFor="password">Mot de Passe</label>
          </div>
          <div className="right-align">
            <label>
              <h6>
                <Link
                  className="grey-text lighten-4 forgotpassword"
                  to="/passreset"
                >
                  Mot de Passe oublié ?
                </Link>
              </h6>
            </label>
          </div>
          <Link
            to="/enseignants"
            className="col s12 btn waves-effect waves-green btn btn-large m-md blue"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPV;
