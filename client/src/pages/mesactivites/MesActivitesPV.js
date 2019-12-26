import React from 'react';

const MesActivitesPV = ({activiteItems}) => {
  return (
    <div className="col s12">
      <div className="row linecenter">
        <div className="col s8">
          <h3 className="grey-text text-left add"> Liste de mes Activités</h3>
        </div>
      </div>
      <br />
      <table className="centered col s10 m10 lg10">
        <thead>
          <tr>
            <th>Type d'Activité</th>
            <th>Date de Démarrage</th>
            <th>Filière</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>{activiteItems}</tbody>
      </table>
    </div>
  );
};

export default MesActivitesPV;
