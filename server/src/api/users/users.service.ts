import { Injectable } from '@nestjs/common';
import { User, CreateUserDto } from '@react-nestjs/common';
import { PrismaClientService } from '../../prisma-client/prisma-client.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaClientService) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.prisma.user.create({
      data: createUserDto,
      include: { cats: true },
    });
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany({ include: { cats: true } });
  }
}
