import {DefaultCrudRepository} from '@loopback/repository';
import {Departement, DepartementRelations} from '../models';
import {MysqlDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DepartementRepository extends DefaultCrudRepository<
  Departement,
  typeof Departement.prototype.id,
  DepartementRelations
> {
  constructor(
    @inject('datasources.MysqlDS') dataSource: MysqlDsDataSource,
  ) {
    super(Departement, dataSource);
  }
}
