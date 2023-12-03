import { Inject, Injectable } from '@nestjs/common';
import { RedisClient } from './redis.provider';

@Injectable()
export class RedisService {
  public constructor(
    @Inject('REDIS_CLIENT')
    private readonly client: RedisClient,
  ) {}

  async hset(key: string, value: string): Promise<void> {
    // key is the table name (ex. Users)
    // value is the hash..
    // hash key is the uuid
    // hash value is the data object

    this.client.hset(key, value);
  }

  async hget(key: string, field: string): Promise<string | null> {
    return this.client.hget(key, field);
  }
}
