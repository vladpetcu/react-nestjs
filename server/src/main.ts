import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ stopAtFirstError: true }));

  await app.listen(configService.get('port'), configService.get('host'));
}

bootstrap();
