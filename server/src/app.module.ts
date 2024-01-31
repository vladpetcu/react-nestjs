import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './api/cats/cats.controller';
import { CatsService } from './api/cats/cats.service';
import { PrismaClientService } from './prisma-client/prisma-client.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService, PrismaClientService],
  exports: [],
})
export class AppModule {}
