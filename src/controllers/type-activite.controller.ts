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
import {TypeActivites} from '../models';
import {TypeActivitesRepository} from '../repositories';

export class TypeActiviteController {
  constructor(
    @repository(TypeActivitesRepository)
    public typeActivitesRepository : TypeActivitesRepository,
  ) {}

  @post('/type-activites', {
    responses: {
      '200': {
        description: 'TypeActivites model instance',
        content: {'application/json': {schema: getModelSchemaRef(TypeActivites)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TypeActivites, {
            title: 'NewTypeActivites',
            
          }),
        },
      },
    })
    typeActivites: TypeActivites,
  ): Promise<TypeActivites> {
    return this.typeActivitesRepository.create(typeActivites);
  }

  @get('/type-activites/count', {
    responses: {
      '200': {
        description: 'TypeActivites model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(TypeActivites)) where?: Where<TypeActivites>,
  ): Promise<Count> {
    return this.typeActivitesRepository.count(where);
  }

  @get('/type-activites', {
    responses: {
      '200': {
        description: 'Array of TypeActivites model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(TypeActivites, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(TypeActivites)) filter?: Filter<TypeActivites>,
  ): Promise<TypeActivites[]> {
    return this.typeActivitesRepository.find(filter);
  }

  @patch('/type-activites', {
    responses: {
      '200': {
        description: 'TypeActivites PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TypeActivites, {partial: true}),
        },
      },
    })
    typeActivites: TypeActivites,
    @param.query.object('where', getWhereSchemaFor(TypeActivites)) where?: Where<TypeActivites>,
  ): Promise<Count> {
    return this.typeActivitesRepository.updateAll(typeActivites, where);
  }

  @get('/type-activites/{id}', {
    responses: {
      '200': {
        description: 'TypeActivites model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(TypeActivites, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(TypeActivites)) filter?: Filter<TypeActivites>
  ): Promise<TypeActivites> {
    return this.typeActivitesRepository.findById(id, filter);
  }

  @patch('/type-activites/{id}', {
    responses: {
      '204': {
        description: 'TypeActivites PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TypeActivites, {partial: true}),
        },
      },
    })
    typeActivites: TypeActivites,
  ): Promise<void> {
    await this.typeActivitesRepository.updateById(id, typeActivites);
  }

  @put('/type-activites/{id}', {
    responses: {
      '204': {
        description: 'TypeActivites PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() typeActivites: TypeActivites,
  ): Promise<void> {
    await this.typeActivitesRepository.replaceById(id, typeActivites);
  }

  @del('/type-activites/{id}', {
    responses: {
      '204': {
        description: 'TypeActivites DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.typeActivitesRepository.deleteById(id);
  }
}
