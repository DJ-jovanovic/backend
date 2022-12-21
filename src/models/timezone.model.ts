import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import IpAddress from './ip_address.model';

@Table({
  modelName: 'timezone',
  underscored: true,
  freezeTableName: true
})
export default class Timezone extends Model<Timezone> {

  @HasMany(() => IpAddress)
  ipAddress: IpAddress[];

  @Column({field: 'timezone_id'})
  timezoneId: string;

  @Column({field: 'abbr'})
  abbr: string;

  @Column({field: 'is_dst'})
  isDst: boolean;

  @Column({field: 'offset'})
  offset: number;

  @Column({field: 'utc'})
  utc: string;

  @Column({field: 'current_time'})
  currentTime: Date;
}
