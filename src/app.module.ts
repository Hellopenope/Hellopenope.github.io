import { Module } from '@nestjs/common';
import { HomeController } from './api/home.controller';
import { PicksController } from './api/picks.controller';
import { AppService } from 'app/services/app.service';
import { RedisModule } from 'redis/redis.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { connectionOptions } from 'config/typeorm.config';

@Module({
  // imports: [TypeOrmModule.forRoot(connectionOptions)],
  imports: [RedisModule],
  controllers: [HomeController, PicksController],
  providers: [AppService],
})
export class AppModule {}
