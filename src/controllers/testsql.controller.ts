import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Testsql} from '../models';
import {TestsqlRepository} from '../repositories';

export class TestsqlController {
  constructor(
    @repository(TestsqlRepository)
    public testsqlRepository : TestsqlRepository,
  ) {}

  @post('/testsqls', {
    responses: {
      '200': {
        description: 'Testsql model instance',
        content: {'application/json': {schema: getModelSchemaRef(Testsql)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Testsql, {
            title: 'NewTestsql',
            
          }),
        },
      },
    })
    testsql: Testsql,
  ): Promise<Testsql> {
    return this.testsqlRepository.create(testsql);
  }

  @get('/testsqls/count', {
    responses: {
      '200': {
        description: 'Testsql model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Testsql)) where?: Where<Testsql>,
  ): Promise<Count> {
    return this.testsqlRepository.count(where);
  }

  @get('/testsqls', {
    responses: {
      '200': {
        description: 'Array of Testsql model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Testsql, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Testsql)) filter?: Filter<Testsql>,
  ): Promise<Testsql[]> {
    return this.testsqlRepository.find(filter);
  }

  @patch('/testsqls', {
    responses: {
      '200': {
        description: 'Testsql PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Testsql, {partial: true}),
        },
      },
    })
    testsql: Testsql,
    @param.query.object('where', getWhereSchemaFor(Testsql)) where?: Where<Testsql>,
  ): Promise<Count> {
    return this.testsqlRepository.updateAll(testsql, where);
  }

  @get('/testsqls/{id}', {
    responses: {
      '200': {
        description: 'Testsql model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Testsql, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(Testsql)) filter?: Filter<Testsql>
  ): Promise<Testsql> {
    return this.testsqlRepository.findById(id, filter);
  }

  @patch('/testsqls/{id}', {
    responses: {
      '204': {
        description: 'Testsql PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Testsql, {partial: true}),
        },
      },
    })
    testsql: Testsql,
  ): Promise<void> {
    await this.testsqlRepository.updateById(id, testsql);
  }

  @put('/testsqls/{id}', {
    responses: {
      '204': {
        description: 'Testsql PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() testsql: Testsql,
  ): Promise<void> {
    await this.testsqlRepository.replaceById(id, testsql);
  }

  @del('/testsqls/{id}', {
    responses: {
      '204': {
        description: 'Testsql DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.testsqlRepository.deleteById(id);
  }
}
