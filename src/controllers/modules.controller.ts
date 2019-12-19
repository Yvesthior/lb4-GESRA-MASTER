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
import {Module} from '../models';
import {ModuleRepository} from '../repositories';

export class ModulesController {
  constructor(
    @repository(ModuleRepository)
    public moduleRepository : ModuleRepository,
  ) {}

  @post('/modules', {
    responses: {
      '200': {
        description: 'Module model instance',
        content: {'application/json': {schema: getModelSchemaRef(Module)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Module, {
            title: 'NewModule',
            
          }),
        },
      },
    })
    module: Module,
  ): Promise<Module> {
    return this.moduleRepository.create(module);
  }

  @get('/modules/count', {
    responses: {
      '200': {
        description: 'Module model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Module)) where?: Where<Module>,
  ): Promise<Count> {
    return this.moduleRepository.count(where);
  }

  @get('/modules', {
    responses: {
      '200': {
        description: 'Array of Module model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Module, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Module)) filter?: Filter<Module>,
  ): Promise<Module[]> {
    return this.moduleRepository.find(filter);
  }

  @patch('/modules', {
    responses: {
      '200': {
        description: 'Module PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Module, {partial: true}),
        },
      },
    })
    module: Module,
    @param.query.object('where', getWhereSchemaFor(Module)) where?: Where<Module>,
  ): Promise<Count> {
    return this.moduleRepository.updateAll(module, where);
  }

  @get('/modules/{id}', {
    responses: {
      '200': {
        description: 'Module model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Module, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(Module)) filter?: Filter<Module>
  ): Promise<Module> {
    return this.moduleRepository.findById(id, filter);
  }

  @patch('/modules/{id}', {
    responses: {
      '204': {
        description: 'Module PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Module, {partial: true}),
        },
      },
    })
    module: Module,
  ): Promise<void> {
    await this.moduleRepository.updateById(id, module);
  }

  @put('/modules/{id}', {
    responses: {
      '204': {
        description: 'Module PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() module: Module,
  ): Promise<void> {
    await this.moduleRepository.replaceById(id, module);
  }

  @del('/modules/{id}', {
    responses: {
      '204': {
        description: 'Module DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.moduleRepository.deleteById(id);
  }
}
