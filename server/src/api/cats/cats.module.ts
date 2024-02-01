import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { PrismaClientService } from 'src/prisma-client/prisma-client.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService, PrismaClientService],
})
export class CatsModule {}
