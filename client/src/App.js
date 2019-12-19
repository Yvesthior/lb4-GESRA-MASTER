import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/login/LoginPV.js';
import Profils from './pages/profils/liste/ProfilsPC';
import NouveauProfil from './pages/profils/ajout/NouveauProfilPC';
import Modules from './pages/modules/liste/ModulesPC';
import NouveauModule from './pages/modules/ajout/NouveauModulePC';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Login} />
        <section className="container">
          <Switch>
            <Route exact path="/enseignants" component={Profils} />
            <Route exact path="/enseignants/add" component={NouveauProfil} />
            <Route exact path="/modules" component={Modules} />
            <Route exact path="/modules/add" component={NouveauModule} />
            {/* <Route exact path="/filieres" component={Filieres} />
            <Route exact path="/departements" component={Departements} />
            <Route exact path="/rapports" component={Rapports} /> */}
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
}

export default App;
