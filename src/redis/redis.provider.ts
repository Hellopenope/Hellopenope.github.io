import { Provider } from '@nestjs/common';
import Redis from 'ioredis';

export type RedisClient = Redis;

export const redisProvider: Provider = {
  useFactory: (): RedisClient =>
    new Redis({
      password: 'password',
      host: 'localhost',
      port: 6379,
    }),
  provide: 'REDIS_CLIENT',
};
