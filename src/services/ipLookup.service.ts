import { IpLokupResponse } from '../entity/ipLookup.entity';
import Connection from '../models/connection.model';
import Currency from '../models/currency.model';
import Flag from '../models/flag.model';
import IpAddress from '../models/ip_address.model';
import Security from '../models/security.model';
import Timezone from '../models/timezone.model';

export class IpLookupService {

  /**
   * Gets IP address data
   * @param ip
   */
  static async GetIpAddress(ip: string): Promise<IpAddress> {
    return IpAddress.findOne({
      where: {
        ip
      },
      include: [
        {
          model: Flag,
          required: false
        },
        {
          model: Connection,
          required: false
        },
        {
          model: Currency,
          required: false
        },
        {
          model: Security,
          required: false
        },
        {
          model: Timezone,
          required: false
        }
    ]
    });
  }

  /**
   * Used to create or get flag
   * @param ipData
   */
  static async CreateOrGetFlagId(ipData: IpLokupResponse): Promise<string> {
    if (!ipData?.flag) {
      return '';
    }
    const { img } = ipData.flag;

    const flag = await Flag.findOne({
      where: { img }
    });

    if (flag && flag.id) {
      return flag.id;
    }

    const res = await Flag.create({
      ...ipData.flag
    });

    return res?.id;
  }

  /**
   * Used to create or get timezone
   * @param ipData
   */
static async CreateOrGetTimezoneId(ipData: IpLokupResponse): Promise<string> {
  if (!ipData?.timezone) {
    return '';
  }
  const { id } = ipData.timezone;

  const timezone = await Timezone.findOne({
    where: { timezoneId: id }
  });

  if (timezone && timezone.id) {
    return timezone.id;
  }

  const res = await Timezone.create({
    timezoneId: ipData.timezone.id,
    abbr: ipData.timezone.abbr,
    isDst: ipData.timezone.is_dst,
    offset: ipData.timezone.offset,
    utc: ipData.timezone.utc,
    currentTime: new Date(ipData.timezone.current_time)
  });

  return res?.id;
}

  /**
   * Used to create or get currency
   * @param ipData
   */
  static async CreateOrGetCurrencyId(ipData: IpLokupResponse): Promise<string> {
    if (!ipData?.currency) {
      return '';
    }
    const { name, code } = ipData.currency;

    const currency = await Currency.findOne({
      where: { name, code }
    });

    if (currency && currency.id) {
      return currency.id;
    }

    const res = await Currency.create({
      name: ipData.currency.name,
      code: ipData.currency.code,
      symbol: ipData.currency.symbol,
      plural: ipData.currency.plural,
      exchangeRate: ipData.currency.exchange_rate
    });

    return res?.id;
  }

  /**
   * Used to create IpAddress
   * @param ipData
   */
  static async CreateIpAddress(ipData: IpLokupResponse): Promise<IpAddress> {
    const flagId = await IpLookupService.CreateOrGetFlagId(ipData);

    const connection = await Connection.create({
      ...ipData.connection
    });

    const timezoneId = await IpLookupService.CreateOrGetTimezoneId(ipData);

    const currencyId = await IpLookupService.CreateOrGetCurrencyId(ipData);

    const security = await Security.create({
      ...ipData.security
    });

    return IpAddress.create({
      ip: ipData.ip,
      type: ipData.type,
      continent: ipData.continent,
      continentCode: ipData.continent_code,
      country: ipData.country,
      countryCode: ipData.continent_code,
      region: ipData.region,
      regionCode: ipData.region_code,
      city: ipData.city,
      latitude: ipData.latitude,
      longitude: ipData.longitude,
      isEu: ipData.is_eu,
      postal: ipData.postal,
      callingCode: ipData.calling_code,
      capital: ipData.capital,
      borders: ipData.borders,
      connectionId: connection?.id,
      flagId,
      timezoneId,
      currencyId,
      securityId: security?.id
    });
  }

  /**
   * Used to delete IP from DB
   * @param ip
   */
  static async deleteIp(ip: string): Promise<number> {

    const count = await IpAddress.destroy({
      where: { ip }
    });

    return count;
  }
}
