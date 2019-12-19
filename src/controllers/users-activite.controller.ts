import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Users,
  Activite,
} from '../models';
import {UsersRepository} from '../repositories';

export class UsersActiviteController {
  constructor(
    @repository(UsersRepository) protected usersRepository: UsersRepository,
  ) { }

  @get('/users/{id}/activites', {
    responses: {
      '200': {
        description: 'Array of Activite\'s belonging to Users',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Activite)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Activite>,
  ): Promise<Activite[]> {
    return this.usersRepository.activites(id).find(filter);
  }

  @post('/users/{id}/activites', {
    responses: {
      '200': {
        description: 'Users model instance',
        content: {'application/json': {schema: getModelSchemaRef(Activite)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Users.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Activite, {
            title: 'NewActiviteInUsers',
            exclude: ['id'],
            optional: ['usersId']
          }),
        },
      },
    }) activite: Omit<Activite, 'id'>,
  ): Promise<Activite> {
    return this.usersRepository.activites(id).create(activite);
  }

  @patch('/users/{id}/activites', {
    responses: {
      '200': {
        description: 'Users.Activite PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Activite, {partial: true}),
        },
      },
    })
    activite: Partial<Activite>,
    @param.query.object('where', getWhereSchemaFor(Activite)) where?: Where<Activite>,
  ): Promise<Count> {
    return this.usersRepository.activites(id).patch(activite, where);
  }

  @del('/users/{id}/activites', {
    responses: {
      '200': {
        description: 'Users.Activite DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Activite)) where?: Where<Activite>,
  ): Promise<Count> {
    return this.usersRepository.activites(id).delete(where);
  }
}
