import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fine } from '../fines/entities/fines.entity';

@Injectable()
export class FineService {
  constructor(
    @InjectRepository(Fine)
    private readonly fineRepository: Repository<Fine>,
  ) {}

  async getAll(): Promise<Fine[]> {
    return this.fineRepository.find();
  }
}
