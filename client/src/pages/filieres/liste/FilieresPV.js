import React from 'react';
import {Link} from 'react-router-dom';

const FilieresPV = () => {
  return (
    <div className="col s12">
      <div className="row linecenter">
        <div className="col s8">
          <h3 className="grey-text text-left add"> Liste des Filières</h3>
        </div>
        <div className="col s4">
          <Link
            to="/filieres/add"
            class="waves-effect waves-light btn-large left blue"
          >
            Ajouter une Filière
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
            <td>LPTI 1</td>
            <td>
              Licence Professionnelle en Télécommunications et Informatique
            </td>
            <td>
              <Link to="/filieres/id">
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
            <td>LIPMEN 1</td>
            <td>
              Licence Professionnelle en Management et Économie du Numérique
            </td>
            <td>
              <Link to="/filieres/id">
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
        <Link to="/filieres/add" className="btn-floating btn-large blue">
          <i className="fa fa-plus"></i>
        </Link>
      </div>
    </div>
  );
};

export default FilieresPV;
