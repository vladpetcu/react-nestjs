import { Injectable } from '@nestjs/common';
import { Cat, CreateCatDto } from '@react-nestjs/common';
import { PrismaClientService } from '../../prisma-client/prisma-client.service';

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
