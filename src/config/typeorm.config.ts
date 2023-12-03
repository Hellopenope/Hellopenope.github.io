import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const appEnv = process.env.APP_ENV ?? 'loacl';
// const databaseUrl =
//   'postgres://hinge_dev:hinge_password@postgres:5432/exercise';
// PGHOST=localhost
// PGUSER=process.env.USER
// PGDATABASE=process.env.USER
// PGPASSWORD=null
// PGPORT=5432
// const databaseUrl = process.env.DATABASE_URL;
const isLocal = appEnv === 'local';
const isTest = appEnv === 'test';

const sslConfig = isLocal || isTest ? false : { rejectUnauthorized: false };

export const connectionOptions: PostgresConnectionOptions = {
  type: 'postgres',
  entities: [__dirname + '/../**/*.entity{.js,.ts}'],
  namingStrategy: new SnakeNamingStrategy(),
  schema: 'college_pickem',
  // url: databaseUrl,
  host: 'localhost',
  port: 5432,
  username: process.env.USER,
  password: process.env.USER,
  database: 'college_pickem',
  ssl: sslConfig,
  synchronize: false,
  logging: isLocal || ['error', 'warn', 'migration'],
  migrations: [__dirname + '/../migrations/**/*{.js,.ts}'],
  migrationsTableName: 'typeorm_migrations',
};

export const datasource = new DataSource(connectionOptions);
