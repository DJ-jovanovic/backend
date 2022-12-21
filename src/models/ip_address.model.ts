import { BelongsTo, Column, CreatedAt, DataType, ForeignKey, Model, Table, UpdatedAt } from 'sequelize-typescript';
import Connection from './connection.model';
import Currency from './currency.model';
import Flag from './flag.model';
import Security from './security.model';
import Timezone from './timezone.model';

@Table({
  modelName: 'ip_address',
  underscored: true,
  freezeTableName: true
})
export default class IpAddress extends Model<IpAddress> {
  @Column({field: 'ip'})
  ip: string;

  @Column({field: 'type'})
  type: string;

  @Column({field: 'continent'})
  continent: string;

  @Column({field: 'continent_code'})
  continentCode: string;

  @Column({field: 'country'})
  country: string;

  @Column({field: 'country_code'})
  countryCode: string;

  @Column({field: 'region'})
  region: string;

  @Column({field: 'region_code'})
  regionCode: string;

  @Column({field: 'city'})
  city: string;

  @Column({field: 'latitude'})
  latitude: number;

  @Column({field: 'longitude'})
  longitude: number;

  @Column({field: 'is_eu'})
  isEu: boolean;

  @Column({field: 'postal'})
  postal: string;

  @Column({field: 'calling_code'})
  callingCode: string;

  @Column({field: 'capital'})
  capital: string;

  @Column({field: 'borders'})
  borders: string;

  @ForeignKey(() => Flag)
  @Column({
    field: 'id',
    type: DataType.UUID
  })
  flagId: string;

  @BelongsTo(() => Flag)
  flag: Flag;

  @ForeignKey(() => Connection)
  @Column({
    field: 'id',
    type: DataType.UUID,
    onDelete: 'CASCADE'
  })
  connectionId: string;

  @BelongsTo(() => Connection)
  connection: Connection;

  @ForeignKey(() => Timezone)
  @Column({
    field: 'id',
    type: DataType.UUID
  })
  timezoneId: string;

  @BelongsTo(() => Timezone)
  timezone: Timezone;

  @ForeignKey(() => Currency)
  @Column({
    field: 'id',
    type: DataType.UUID
  })
  currencyId: string;

  @BelongsTo(() => Currency)
  currency: Currency;

  @ForeignKey(() => Security)
  @Column({
    field: 'id',
    type: DataType.UUID,
    onDelete: 'CASCADE'
  })
  securityId: string;

  @BelongsTo(() => Security)
  security: Security;

  @Column({field: 'created_at'})
  @CreatedAt
  createdAt: Date;

  @Column({field: 'updated_at'})
  @UpdatedAt
  updatedAt: Date;

}
