import React from 'react';
import {Link} from 'react-router-dom';

const EnseignantsPV = () => {
  return (
    <div className="col s12">
      <div className="row linecenter">
        <div className="col s8">
          <h3 className="grey-text text-left add"> Liste des Profils</h3>
        </div>
        <div className="col s4">
          <Link
            to="/enseignants/add"
            class="waves-effect waves-light btn-large left blue"
          >
            Ajouter un Profil
          </Link>
        </div>
      </div>
      <br />
      <table className="centered col s10 m10 lg10">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Département</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Jean Marie Preira</td>
            <td>jmpreira@gmail.com</td>
            <td>ESMT TIC</td>
            <td>
              <div className=" waves-effects waves-light btn-small red">
                <i className="fas fa-trash-alt"></i> Supprimer
              </div>
            </td>
          </tr>
          <tr>
            <td>Oumar Ndiaye</td>
            <td>ndiayeoumar@gmail.com</td>
            <td>ESMT</td>
            <td>
              <div className=" waves-effects waves-light btn-small red">
                <i className="fas fa-trash-alt"></i> Supprimer
              </div>
            </td>
          </tr>
          <tr>
            <td>Andre Onana</td>
            <td>onanaandre@gmail.com</td>
            <td>ESMT Management</td>
            <td>
              <div className=" waves-effects waves-light btn-small red">
                <i className="fas fa-trash-alt"></i> Supprimer
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="fixed-action-btn">
        <Link to="/enseignants/add" className="btn-floating btn-large blue">
          <i className="fa fa-plus"></i>
        </Link>
      </div>
    </div>
  );
};

export default EnseignantsPV;
