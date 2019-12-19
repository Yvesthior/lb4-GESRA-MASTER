import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Activite, ActiviteRelations, Module, TypeActivites, Filiere} from '../models';
import {MysqlDsDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {ModuleRepository} from './module.repository';
import {TypeActivitesRepository} from './type-activites.repository';
import {FiliereRepository} from './filiere.repository';

export class ActiviteRepository extends DefaultCrudRepository<
  Activite,
  typeof Activite.prototype.id,
  ActiviteRelations
> {

  public readonly module: BelongsToAccessor<Module, typeof Activite.prototype.id>;

  public readonly typeActivites: BelongsToAccessor<TypeActivites, typeof Activite.prototype.id>;

  public readonly filiere: BelongsToAccessor<Filiere, typeof Activite.prototype.id>;

  constructor(
    @inject('datasources.MysqlDS') dataSource: MysqlDsDataSource, @repository.getter('ModuleRepository') protected moduleRepositoryGetter: Getter<ModuleRepository>, @repository.getter('TypeActivitesRepository') protected typeActivitesRepositoryGetter: Getter<TypeActivitesRepository>, @repository.getter('FiliereRepository') protected filiereRepositoryGetter: Getter<FiliereRepository>,
  ) {
    super(Activite, dataSource);
    this.filiere = this.createBelongsToAccessorFor('filiere', filiereRepositoryGetter,);
    this.registerInclusionResolver('filiere', this.filiere.inclusionResolver);
    this.typeActivites = this.createBelongsToAccessorFor('typeActivites', typeActivitesRepositoryGetter,);
    this.registerInclusionResolver('typeActivites', this.typeActivites.inclusionResolver);
    this.module = this.createBelongsToAccessorFor('module', moduleRepositoryGetter,);
    this.registerInclusionResolver('module', this.module.inclusionResolver);
  }
}
