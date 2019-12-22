import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/login/LoginPC.js';
import Profils from './pages/profils/liste/ProfilsPC';
import NouveauProfil from './pages/profils/ajout/NouveauProfilPC';
import ModifierProfil from './pages/profils/modifier/ModifierProfilPC';
import Modules from './pages/modules/liste/ModulesPC';
import NouveauModule from './pages/modules/ajout/NouveauModulePC';
import ModifierModulePC from './pages/modules/modifier/ModifierModulePC';
import Departements from './pages/departements/liste/DepartementsPC';
import NouveauDepartement from './pages/departements/ajout/NouveauDepartementPC';
import ModifierDepartement from './pages/departements/modifier/ModifierDepartementPC';
import Filieres from './pages/filieres/liste/FilieresPC';
import NouvelleFiliere from './pages/filieres/ajout/NouvelleFilierePC';
import ModifierFiliere from './pages/filieres/modifier/ModifierFilierePC';
import TypesActivites from './pages/typesactivites/liste/TypesActivitesPC';
import NouveauTypeActivite from './pages/typesactivites/ajout/NouveauTypeActivitePC';
import ModifierTypeActivite from './pages/typesactivites/modifier/ModifierTypeActivitePC';
import Reglages from './pages/reglages/ReglagesPC';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Login} />
        <section className="container">
          <Switch>
            <Route exact path="/profils" component={Profils} />
            <Route exact path="/profils/add" component={NouveauProfil} />
            <Route exact path="/profils/:id" component={ModifierProfil} />
            <Route exact path="/modules" component={Modules} />
            <Route exact path="/modules/add" component={NouveauModule} />
            <Route exact path="/modules/:id" component={ModifierModulePC} />
            <Route exact path="/departements" component={Departements} />
            <Route
              exact
              path="/departements/add"
              component={NouveauDepartement}
            />
            <Route
              exact
              path="/departements/:id"
              component={ModifierDepartement}
            />
            <Route exact path="/filieres" component={Filieres} />
            <Route exact path="/filieres/add" component={NouvelleFiliere} />
            <Route exact path="/filieres/:id" component={ModifierFiliere} />
            <Route exact path="/typesactivites/" component={TypesActivites} />
            <Route
              exact
              path="/typesactivites/add"
              component={NouveauTypeActivite}
            />
            <Route
              exact
              path="/typesactivites/:id"
              component={ModifierTypeActivite}
            />

            <Route exact path="/reglages" component={Reglages} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
}

export default App;
