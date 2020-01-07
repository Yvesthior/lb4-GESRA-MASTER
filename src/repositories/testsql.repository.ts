import {DefaultCrudRepository} from '@loopback/repository';
import {Testsql, TestsqlRelations} from '../models';
import {MysqldoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TestsqlRepository extends DefaultCrudRepository<
  Testsql,
  typeof Testsql.prototype.id,
  TestsqlRelations
> {
  constructor(
    @inject('datasources.mysqldo') dataSource: MysqldoDataSource,
  ) {
    super(Testsql, dataSource);
  }
}
