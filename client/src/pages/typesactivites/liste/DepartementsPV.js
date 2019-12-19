import React from 'react';
import {Link} from 'react-router-dom';

const ModulesPV = () => {
  return (
    <div className="col s12">
      <div className="row linecenter">
        <div className="col s8">
          <h3 className="grey-text text-left add"> Liste des Départements</h3>
        </div>
        <div className="col s4">
          <Link
            to="/departements/add"
            class="waves-effect waves-light btn-large left blue"
          >
            Ajouter un Département
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
            <td>ESMTIC</td>
            <td>ESMT Technologies de L'Information et de la Communication</td>
            <td>
              <Link to="/departements/id">
                <div
                  style={{marginRight: 3}}
                  className=" waves-effects waves-light btn-small green"
                >
                  <i class="fas fa-edit"></i> Modifier
                </div>
              </Link>
              <div className=" waves-effects waves-light btn-small red">
                <i className="fas fa-trash-alt"></i> Supprimer
              </div>
            </td>
          </tr>
          <tr>
            <td>ESMT Management</td>
            <td>ESMT Management</td>
            <td>
              <Link to="/departements/id">
                <div
                  style={{marginRight: 3}}
                  className=" waves-effects waves-light btn-small green"
                >
                  <i class="fas fa-edit"></i> Modifier
                </div>
              </Link>
              <div className=" waves-effects waves-light btn-small red">
                <i className="fas fa-trash-alt"></i> Supprimer
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="fixed-action-btn">
        <Link to="/departements/add" className="btn-floating btn-large blue">
          <i className="fa fa-plus"></i>
        </Link>
      </div>
    </div>
  );
};

export default ModulesPV;
