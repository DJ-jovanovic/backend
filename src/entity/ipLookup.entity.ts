
export interface Flag {
  img: string;
  emoji: string;
  emoji_unicode: string;
}

export interface Connection {
  asn: number;
  org: string;
  isp: string;
  domain: string;
}

export interface Timezone {
  id: string;
  abbr: string;
  is_dst: boolean;
  offset: number;
  utc: string;
  current_time: string;
}

export interface Currency {
  name: string;
  code: string;
  symbol: string;
  plural: string;
  exchange_rate: number;
}

export interface Security {
  anonymous: boolean;
  proxy: boolean;
  vpn: boolean;
  tor: boolean;
  hosting: boolean;
}

export interface IpLokupResponse {
  ip: string;
  success?: boolean;
  message?: string;
  type: string;
  continent: string;
  continent_code: string;
  country: string;
  country_code: string;
  region: string;
  region_code: string;
  city: string;
  latitude: number;
  longitude: number;
  is_eu: boolean;
  postal: string;
  calling_code: string;
  capital: string;
  borders: string;
  flag?: Flag;
  connection?: Connection;
  timezone?: Timezone;
  currency?: Currency;
  security?: Security;
}
