import {Entity, model, property} from '@loopback/repository';

@model()
export class Departement extends Entity {
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
  name: string;


  constructor(data?: Partial<Departement>) {
    super(data);
  }
}

export interface DepartementRelations {
  // describe navigational properties here
}

export type DepartementWithRelations = Departement & DepartementRelations;
