import { Module } from '@nestjs/common';
import { HomeController } from './api/home.controller';
import { AppService } from './services/app.service';
import { PicksController } from './api/picks.controller';

@Module({
  imports: [],
  controllers: [HomeController, PicksController],
  providers: [AppService],
})
export class AppModule {}
