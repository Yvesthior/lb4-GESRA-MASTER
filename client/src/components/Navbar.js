import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="blue darken-3">
          <div className="nav-wrapper row">
            <Link to="/" className="brand-logo center">
              ESMT - GESRA
            </Link>
            <Link
              to="main-menu"
              data-target="main-menu"
              className="sidenav-trigger show-on-large"
            >
              <i className="fa fa-bars"></i> Menu
            </Link>
            <ul className="right hide-on-small-only">
              <li>Bienvenue Mr Preira</li>
              <li>
                <Link to="/">
                  <i className="fa fa-sign-out"></i> Déconnexion
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="main-menu">
          <li>
            <Link to="/activites">
              <i className="fa fa-users"></i> Activités
            </Link>
          </li>
          <li>
            <Link to="/modules">
              <i className="fa fa-users"></i> Modules
            </Link>
          </li>
          <li>
            <Link to="/departements">
              <i className="fa fa-plus"></i> Departements
            </Link>
          </li>
          <li>
            <Link to="/filieres">
              <i className="fa fa-question-circle"></i> Filiéres
            </Link>
          </li>
          <li>
            <Link to="/typesactivites">
              <i className="fa fa-question-circle"></i> Types d'Activité
            </Link>
          </li>
          <li>
            <Link to="/profils">
              <i className="fa fa-question-circle"></i> Profils
            </Link>
          </li>
          <li>
            <Link to="/profils/4/activites">
              <i className="fa fa-question-circle"></i> Mes Activités
            </Link>
          </li>
          <li>
            <Link to="/reglages">
              <i className="fa fa-question-circle"></i> Réglages
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
