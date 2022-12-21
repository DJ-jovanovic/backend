import { Column, HasOne, Model, Table } from 'sequelize-typescript';
import IpAddress from './ip_address.model';

@Table({
  modelName: 'security',
  underscored: true,
  freezeTableName: true
})
export default class Security extends Model<Security> {

  @HasOne(() => IpAddress)
  ipAddress: IpAddress[];

  @Column({field: 'anonymous'})
  anonymous: boolean;

  @Column({field: 'proxy'})
  proxy: boolean;

  @Column({field: 'vpn'})
  vpn: boolean;

  @Column({field: 'tor'})
  tor: boolean;

  @Column({field: 'hosting'})
  hosting: boolean;

}
