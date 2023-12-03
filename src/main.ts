import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { AppModule } from 'app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { bufferLogs: true },
  );

  app.useStaticAssets({
    root: join(__dirname, 'app/public'),
    prefix: '/public/',
  });

  app.setViewEngine({
    engine: {
      ejs: require('ejs'),
    },
    templates: join(__dirname, 'app/views'),
  });

  await app.listen(3000);
}

bootstrap();
