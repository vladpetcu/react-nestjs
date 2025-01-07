import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './api/cats/cats.controller';
import { CatsService } from './api/cats/cats.service';
import { PrismaClientService } from './prisma-client/prisma-client.service';
import { UsersController } from './api/users/users.controller';
import { UsersService } from './api/users/users.service';
import { UsersModule } from './api/users/users.module';
import { CatsModule } from './api/cats/cats.module';
import { ConfigModule } from '@nestjs/config';
import { config } from './config/config'

@Module({
  imports: [ConfigModule.forRoot({ load: [config] }), CatsModule, UsersModule],
  controllers: [AppController, CatsController, UsersController],
  providers: [AppService, CatsService, PrismaClientService, UsersService],
  exports: [],
})
export class AppModule {}
