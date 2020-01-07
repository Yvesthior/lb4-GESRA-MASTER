import {Entity, model, property} from '@loopback/repository';

@model()
export class Testsql extends Entity {
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
    type: 'number',
  })
  value?: number;


  constructor(data?: Partial<Testsql>) {
    super(data);
  }
}

export interface TestsqlRelations {
  // describe navigational properties here
}

export type TestsqlWithRelations = Testsql & TestsqlRelations;
