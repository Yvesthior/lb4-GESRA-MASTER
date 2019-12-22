import {
  DefaultCrudRepository,
  repository,
  BelongsToAccessor,
  HasManyRepositoryFactory,
} from '@loopback/repository';
import {Users, UsersRelations, Departement, Activite} from '../models';
import {MysqlDsDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {DepartementRepository} from './departement.repository';
import {ActiviteRepository} from './activite.repository';

export class UsersRepository extends DefaultCrudRepository<
  Users,
  typeof Users.prototype.id,
  UsersRelations
> {
  public readonly departement: BelongsToAccessor<
    Departement,
    typeof Users.prototype.id
  >;

  public readonly activites: HasManyRepositoryFactory<
    Activite,
    typeof Users.prototype.id
  >;

  constructor(
    @inject('datasources.MysqlDS') dataSource: MysqlDsDataSource,
    @repository.getter('DepartementRepository')
    protected departementRepositoryGetter: Getter<DepartementRepository>,
    @repository.getter('ActiviteRepository')
    protected activiteRepositoryGetter: Getter<ActiviteRepository>,
  ) {
    super(Users, dataSource);
    this.activites = this.createHasManyRepositoryFactoryFor(
      'activites',
      activiteRepositoryGetter,
    );
    this.registerInclusionResolver(
      'activites',
      this.activites.inclusionResolver,
    );
    this.departement = this.createBelongsToAccessorFor(
      'departement',
      departementRepositoryGetter,
    );
    this.registerInclusionResolver(
      'departement',
      this.departement.inclusionResolver,
    );
  }
}
