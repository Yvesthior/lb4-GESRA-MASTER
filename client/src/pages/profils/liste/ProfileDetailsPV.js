import React from 'react';
import {Link} from 'react-router-dom';

const ProfileDetailsPV = props => {
  return (
    <div>
      {' '}
      <br />
      <div className="container">
        <Link to="/profils" className="btn grey">
          Retour
        </Link>
        <h2 className="grey-text">Profil de Mr {props.item.firstName}</h2>
        <ul className="collection">
          <li className="collection-item">Nom: {props.item.firstName}</li>
          <li className="collection-item">Prénom: {props.item.lastName}</li>
          <li className="collection-item">Email : {props.item.email}</li>

          <li className="collection-item">Position : {props.type}</li>

          <li className="collection-item">
            Département: {props.item.departementName}
          </li>
        </ul>
        <Link to={`/profils/${props.item.id}/rapport`}>
          <div className=" waves-effects waves-light btn-small green left">
            <i class="fas fa-scroll"></i> Rapport d'Activités
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProfileDetailsPV;
