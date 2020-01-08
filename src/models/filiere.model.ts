import {Entity, model, property} from '@loopback/repository';

@model()
export class Filiere extends Entity {
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

  @property({
    type: 'string',
  })
  description?: string;

  constructor(data?: Partial<Filiere>) {
    super(data);
  }
}

export interface FiliereRelations {
  // describe navigational properties here
}

export type FiliereWithRelations = Filiere & FiliereRelations;
