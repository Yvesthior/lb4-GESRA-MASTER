import React from 'react';
import {Link} from 'react-router-dom';

const ModulesPV = () => {
  return (
    <div className="col s12">
      <div className="row linecenter">
        <div className="col s8">
          <h3 className="grey-text text-left add"> Liste des Modules</h3>
        </div>
        <div className="col s4">
          <Link
            to="/modules/add"
            class="waves-effect waves-light btn-large left blue"
          >
            Ajouter un Module
          </Link>
        </div>
      </div>
      <br />
      <table className="centered col s10 m10 lg10">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>PHP</td>
            <td>PHP</td>
            <td>
              <div className=" waves-effects waves-light btn-small red">
                <i className="fas fa-trash-alt"></i> Supprimer
              </div>
            </td>
          </tr>
          <tr>
            <td>Javascript</td>
            <td>Javascript</td>
            <td>
              <div className=" waves-effects waves-light btn-small red">
                <i className="fas fa-trash-alt"></i> Supprimer
              </div>
            </td>
          </tr>
          <tr>
            <td>PO</td>
            <td>Physique des Ondes Electromagnétiques</td>
            <td>
              <div className=" waves-effects waves-light btn-small red">
                <i className="fas fa-trash-alt"></i> Supprimer
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="fixed-action-btn">
        <Link to="/modules/add" className="btn-floating btn-large blue">
          <i className="fa fa-plus"></i>
        </Link>
      </div>
    </div>
  );
};

export default ModulesPV;
