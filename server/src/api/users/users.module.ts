import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaClientService } from 'src/prisma-client/prisma-client.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaClientService],
})
export class UsersModule {}
