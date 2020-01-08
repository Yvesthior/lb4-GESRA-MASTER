import {DefaultCrudRepository} from '@loopback/repository';
import {Module, ModuleRelations} from '../models';
import {MysqlDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ModuleRepository extends DefaultCrudRepository<
  Module,
  typeof Module.prototype.id,
  ModuleRelations
> {
  constructor(
    @inject('datasources.MysqlDS') dataSource: MysqlDsDataSource,
  ) {
    super(Module, dataSource);
  }
}
