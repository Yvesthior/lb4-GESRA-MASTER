import {Entity, model, property} from '@loopback/repository';

@model()
export class Dummy extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    default: 117,
  })
  id?: number;

  @property({
    type: 'string',
    default: 0,
  })
  valueeuer?: string;

  constructor(data?: Partial<Dummy>) {
    super(data);
  }
}

export interface DummyRelations {
  // describe navigational properties here
}

export type DummyWithRelations = Dummy & DummyRelations;
