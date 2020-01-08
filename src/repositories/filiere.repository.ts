import {DefaultCrudRepository} from '@loopback/repository';
import {Filiere, FiliereRelations} from '../models';
import {MysqlDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FiliereRepository extends DefaultCrudRepository<
  Filiere,
  typeof Filiere.prototype.id,
  FiliereRelations
> {
  constructor(
    @inject('datasources.MysqlDS') dataSource: MysqlDsDataSource,
  ) {
    super(Filiere, dataSource);
  }
}
