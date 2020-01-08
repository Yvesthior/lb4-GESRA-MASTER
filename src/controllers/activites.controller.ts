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
import {Activite} from '../models';
import {ActiviteRepository} from '../repositories';

export class ActivitesController {
  constructor(
    @repository(ActiviteRepository)
    public activiteRepository : ActiviteRepository,
  ) {}

  @post('/activites', {
    responses: {
      '200': {
        description: 'Activite model instance',
        content: {'application/json': {schema: getModelSchemaRef(Activite)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Activite, {
            title: 'NewActivite',
            
          }),
        },
      },
    })
    activite: Activite,
  ): Promise<Activite> {
    return this.activiteRepository.create(activite);
  }

  @get('/activites/count', {
    responses: {
      '200': {
        description: 'Activite model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Activite)) where?: Where<Activite>,
  ): Promise<Count> {
    return this.activiteRepository.count(where);
  }

  @get('/activites', {
    responses: {
      '200': {
        description: 'Array of Activite model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Activite, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Activite)) filter?: Filter<Activite>,
  ): Promise<Activite[]> {
    return this.activiteRepository.find(filter);
  }

  @patch('/activites', {
    responses: {
      '200': {
        description: 'Activite PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Activite, {partial: true}),
        },
      },
    })
    activite: Activite,
    @param.query.object('where', getWhereSchemaFor(Activite)) where?: Where<Activite>,
  ): Promise<Count> {
    return this.activiteRepository.updateAll(activite, where);
  }

  @get('/activites/{id}', {
    responses: {
      '200': {
        description: 'Activite model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Activite, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(Activite)) filter?: Filter<Activite>
  ): Promise<Activite> {
    return this.activiteRepository.findById(id, filter);
  }

  @patch('/activites/{id}', {
    responses: {
      '204': {
        description: 'Activite PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Activite, {partial: true}),
        },
      },
    })
    activite: Activite,
  ): Promise<void> {
    await this.activiteRepository.updateById(id, activite);
  }

  @put('/activites/{id}', {
    responses: {
      '204': {
        description: 'Activite PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() activite: Activite,
  ): Promise<void> {
    await this.activiteRepository.replaceById(id, activite);
  }

  @del('/activites/{id}', {
    responses: {
      '204': {
        description: 'Activite DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.activiteRepository.deleteById(id);
  }
}
