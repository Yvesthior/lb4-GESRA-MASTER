import {Entity, model, property} from '@loopback/repository';

@model()
export class TypeActivites extends Entity {
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


  constructor(data?: Partial<TypeActivites>) {
    super(data);
  }
}

export interface TypeActivitesRelations {
  // describe navigational properties here
}

export type TypeActivitesWithRelations = TypeActivites & TypeActivitesRelations;
