import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import IpAddress from './ip_address.model';

@Table({
  modelName: 'currency',
  underscored: true,
  freezeTableName: true
})
export default class Currency extends Model<Currency> {

  @HasMany(() => IpAddress)
  ipAddress: IpAddress[];

  @Column({field: 'name'})
  name: string;

  @Column({field: 'code'})
  code: string;

  @Column({field: 'symbol'})
  symbol: string;

  @Column({field: 'plural'})
  plural: string;

  @Column({field: 'exchange_rate'})
  exchangeRate: number;

}
