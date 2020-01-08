import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Activite,
  Module,
} from '../models';
import {ActiviteRepository} from '../repositories';

export class ActiviteModuleController {
  constructor(
    @repository(ActiviteRepository)
    public activiteRepository: ActiviteRepository,
  ) { }

  @get('/activites/{id}/module', {
    responses: {
      '200': {
        description: 'Module belonging to Activite',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Module)},
          },
        },
      },
    },
  })
  async getModule(
    @param.path.number('id') id: typeof Activite.prototype.id,
  ): Promise<Module> {
    return this.activiteRepository.module(id);
  }
}
