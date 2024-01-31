import { Injectable } from '@nestjs/common';
import { Cat } from './types/cat.type';
import { PrismaClientService } from '../../prisma-client/prisma-client.service';
import { CreateCatDto } from './dto/create-cat.dto';
// import { Cat } from '@prisma/client';

@Injectable()
export class CatsService {
  constructor(private prisma: PrismaClientService) {}

  create(createCatDto: CreateCatDto): Promise<Cat> {
    return this.prisma.cat.create({ data: createCatDto });
  }

  findAll(): Promise<Cat[]> {
    return this.prisma.cat.findMany();
  }
}
