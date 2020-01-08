import {
  Entity,
  model,
  property,
  belongsTo,
  hasMany,
} from '@loopback/repository';
import {Departement} from './departement.model';
import {Activite} from './activite.model';

@model()
export class Users extends Entity {
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
  firstName: string;

  @property({
    type: 'string',
  })
  lastName?: string;

  @property({
    type: 'string',
    required: 'true',
  })
  email?: number;

  @property({
    type: 'string',
  })
  password: string;

  @property({
    type: 'number',
    required: true,
  })
  type: number;

  @belongsTo(() => Departement)
  departementId: number;

  @hasMany(() => Activite)
  activites: Activite[];

  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
}

export type UsersWithRelations = Users & UsersRelations;
