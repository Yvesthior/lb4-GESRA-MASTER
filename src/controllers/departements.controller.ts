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
import {Departement} from '../models';
import {DepartementRepository} from '../repositories';

export class DepartementsController {
  constructor(
    @repository(DepartementRepository)
    public departementRepository : DepartementRepository,
  ) {}

  @post('/departements', {
    responses: {
      '200': {
        description: 'Departement model instance',
        content: {'application/json': {schema: getModelSchemaRef(Departement)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Departement, {
            title: 'NewDepartement',
            
          }),
        },
      },
    })
    departement: Departement,
  ): Promise<Departement> {
    return this.departementRepository.create(departement);
  }

  @get('/departements/count', {
    responses: {
      '200': {
        description: 'Departement model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Departement)) where?: Where<Departement>,
  ): Promise<Count> {
    return this.departementRepository.count(where);
  }

  @get('/departements', {
    responses: {
      '200': {
        description: 'Array of Departement model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Departement, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Departement)) filter?: Filter<Departement>,
  ): Promise<Departement[]> {
    return this.departementRepository.find(filter);
  }

  @patch('/departements', {
    responses: {
      '200': {
        description: 'Departement PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Departement, {partial: true}),
        },
      },
    })
    departement: Departement,
    @param.query.object('where', getWhereSchemaFor(Departement)) where?: Where<Departement>,
  ): Promise<Count> {
    return this.departementRepository.updateAll(departement, where);
  }

  @get('/departements/{id}', {
    responses: {
      '200': {
        description: 'Departement model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Departement, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(Departement)) filter?: Filter<Departement>
  ): Promise<Departement> {
    return this.departementRepository.findById(id, filter);
  }

  @patch('/departements/{id}', {
    responses: {
      '204': {
        description: 'Departement PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Departement, {partial: true}),
        },
      },
    })
    departement: Departement,
  ): Promise<void> {
    await this.departementRepository.updateById(id, departement);
  }

  @put('/departements/{id}', {
    responses: {
      '204': {
        description: 'Departement PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() departement: Departement,
  ): Promise<void> {
    await this.departementRepository.replaceById(id, departement);
  }

  @del('/departements/{id}', {
    responses: {
      '204': {
        description: 'Departement DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.departementRepository.deleteById(id);
  }
}
