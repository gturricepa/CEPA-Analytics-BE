import { Controller, Get } from '@nestjs/common';
import { Fine } from '../fines/entities/fines.entity';
import { FineService } from './fines.service';

@Controller('mondelez/fines')
export class FineController {
  constructor(private readonly fineService: FineService) {}

  @Get()
  async getAllFines(): Promise<Fine[]> {
    return this.fineService.getAll();
  }
}
