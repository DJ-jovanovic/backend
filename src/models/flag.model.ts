import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import IpAddress from './ip_address.model';

@Table({
  modelName: 'flag',
  underscored: true,
  freezeTableName: true
})
export default class Flag extends Model<Flag> {

  @HasMany(() => IpAddress)
  ipAddress: IpAddress[];

  @Column({field: 'img'})
  img: string;

  @Column({field: 'emoji'})
  emoji: string;

  @Column({field: 'emoji_unicode'})
  emojiUnicode: string;

}
