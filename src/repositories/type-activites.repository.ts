import {DefaultCrudRepository} from '@loopback/repository';
import {TypeActivites, TypeActivitesRelations} from '../models';
import {MysqlDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TypeActivitesRepository extends DefaultCrudRepository<
  TypeActivites,
  typeof TypeActivites.prototype.id,
  TypeActivitesRelations
> {
  constructor(
    @inject('datasources.MysqlDS') dataSource: MysqlDsDataSource,
  ) {
    super(TypeActivites, dataSource);
  }
}
