import { Injectable } from '@nestjs/common';
import { Cat } from './types/cat.type';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [{ name: 'Cat1', age: 1, breed: 'breed1' }];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
