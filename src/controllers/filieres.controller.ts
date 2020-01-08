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
import {Filiere} from '../models';
import {FiliereRepository} from '../repositories';

export class FilieresController {
  constructor(
    @repository(FiliereRepository)
    public filiereRepository : FiliereRepository,
  ) {}

  @post('/filieres', {
    responses: {
      '200': {
        description: 'Filiere model instance',
        content: {'application/json': {schema: getModelSchemaRef(Filiere)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Filiere, {
            title: 'NewFiliere',
            
          }),
        },
      },
    })
    filiere: Filiere,
  ): Promise<Filiere> {
    return this.filiereRepository.create(filiere);
  }

  @get('/filieres/count', {
    responses: {
      '200': {
        description: 'Filiere model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Filiere)) where?: Where<Filiere>,
  ): Promise<Count> {
    return this.filiereRepository.count(where);
  }

  @get('/filieres', {
    responses: {
      '200': {
        description: 'Array of Filiere model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Filiere, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Filiere)) filter?: Filter<Filiere>,
  ): Promise<Filiere[]> {
    return this.filiereRepository.find(filter);
  }

  @patch('/filieres', {
    responses: {
      '200': {
        description: 'Filiere PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Filiere, {partial: true}),
        },
      },
    })
    filiere: Filiere,
    @param.query.object('where', getWhereSchemaFor(Filiere)) where?: Where<Filiere>,
  ): Promise<Count> {
    return this.filiereRepository.updateAll(filiere, where);
  }

  @get('/filieres/{id}', {
    responses: {
      '200': {
        description: 'Filiere model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Filiere, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(Filiere)) filter?: Filter<Filiere>
  ): Promise<Filiere> {
    return this.filiereRepository.findById(id, filter);
  }

  @patch('/filieres/{id}', {
    responses: {
      '204': {
        description: 'Filiere PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Filiere, {partial: true}),
        },
      },
    })
    filiere: Filiere,
  ): Promise<void> {
    await this.filiereRepository.updateById(id, filiere);
  }

  @put('/filieres/{id}', {
    responses: {
      '204': {
        description: 'Filiere PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() filiere: Filiere,
  ): Promise<void> {
    await this.filiereRepository.replaceById(id, filiere);
  }

  @del('/filieres/{id}', {
    responses: {
      '204': {
        description: 'Filiere DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.filiereRepository.deleteById(id);
  }
}
