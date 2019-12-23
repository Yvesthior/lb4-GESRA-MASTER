import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Module} from './module.model';
import {TypeActivites} from './type-activites.model';
import {Filiere} from './filiere.model';

@model()
export class Activite extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  date_debut: string;

  @property({
    type: 'string',
  })
  date_fin?: string;

  @property({
    type: 'number',
    required: true,
  })
  volumeHoraire: number;

  @property({
    type: 'string',
  })
  commentaires?: string;

  @belongsTo(() => Module)
  moduleId: number;

  @belongsTo(() => TypeActivites)
  typeActivitesId: number;

  @belongsTo(() => Filiere)
  filiereId: number;

  @property({
    type: 'number',
  })
  usersId?: number;

  constructor(data?: Partial<Activite>) {
    super(data);
  }
}

export interface ActiviteRelations {
  // describe navigational properties here
}

export type ActiviteWithRelations = Activite & ActiviteRelations;
