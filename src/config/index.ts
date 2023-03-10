import environment from 'dotenv';

const env = environment.config();
if (env.error) {
  throw env.error;
}

const {
  // Default config
  PORT,
  NODE_ENV,

  // DB  info
  DB_NAME,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD

} = process.env;

export enum ApplicationEnv {
  PRODUCTION = 'production',
  DEVELOPMENT = 'development'
}

const ENV: ApplicationEnv = NODE_ENV as ApplicationEnv || ApplicationEnv.DEVELOPMENT;

const CONFIG = {
  // Default config
  NODE_ENV: ENV,
  PORT: +PORT,

  // DB info
  DB_NAME,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD
};

export default CONFIG;
