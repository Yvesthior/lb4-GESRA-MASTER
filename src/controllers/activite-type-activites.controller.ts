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
  TypeActivites,
} from '../models';
import {ActiviteRepository} from '../repositories';

export class ActiviteTypeActivitesController {
  constructor(
    @repository(ActiviteRepository)
    public activiteRepository: ActiviteRepository,
  ) { }

  @get('/activites/{id}/type-activites', {
    responses: {
      '200': {
        description: 'TypeActivites belonging to Activite',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(TypeActivites)},
          },
        },
      },
    },
  })
  async getTypeActivites(
    @param.path.number('id') id: typeof Activite.prototype.id,
  ): Promise<TypeActivites> {
    return this.activiteRepository.typeActivites(id);
  }
}
