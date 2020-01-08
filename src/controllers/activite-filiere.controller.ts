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
  Filiere,
} from '../models';
import {ActiviteRepository} from '../repositories';

export class ActiviteFiliereController {
  constructor(
    @repository(ActiviteRepository)
    public activiteRepository: ActiviteRepository,
  ) { }

  @get('/activites/{id}/filiere', {
    responses: {
      '200': {
        description: 'Filiere belonging to Activite',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Filiere)},
          },
        },
      },
    },
  })
  async getFiliere(
    @param.path.number('id') id: typeof Activite.prototype.id,
  ): Promise<Filiere> {
    return this.activiteRepository.filiere(id);
  }
}
