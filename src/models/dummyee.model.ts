import {Entity, model, property} from '@loopback/repository';

@model()
export class Dummyee extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'boolean',
    required: true,
    default: false,
  })
  status: boolean;


  constructor(data?: Partial<Dummyee>) {
    super(data);
  }
}

export interface DummyeeRelations {
  // describe navigational properties here
}

export type DummyeeWithRelations = Dummyee & DummyeeRelations;
