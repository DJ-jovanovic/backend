import { Column, HasOne, Model, Table } from 'sequelize-typescript';
import IpAddress from './ip_address.model';

@Table({
  modelName: 'connection',
  underscored: true,
  freezeTableName: true
})
export default class Connection extends Model<Connection> {

  @HasOne(() => IpAddress)
  ipAddress: IpAddress[];

  @Column({field: 'asn'})
  asn: number;

  @Column({field: 'org'})
  org: string;

  @Column({field: 'isp'})
  isp: string;

  @Column({field: 'domain'})
  domain: string;
}
