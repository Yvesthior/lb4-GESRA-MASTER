import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Users,
  Departement,
} from '../models';
import {UsersRepository} from '../repositories';

export class UsersDepartementController {
  constructor(
    @repository(UsersRepository)
    public usersRepository: UsersRepository,
  ) { }

  @get('/users/{id}/departement', {
    responses: {
      '200': {
        description: 'Departement belonging to Users',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Departement)},
          },
        },
      },
    },
  })
  async getDepartement(
    @param.path.number('id') id: typeof Users.prototype.id,
  ): Promise<Departement> {
    return this.usersRepository.departement(id);
  }
}
