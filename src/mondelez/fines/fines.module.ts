import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fine } from '../fines/entities/fines.entity';
import { FineController } from './fines.controller';
import { FineService } from './fines.service';

@Module({
  imports: [TypeOrmModule.forFeature([Fine])],
  controllers: [FineController],
  providers: [FineService],
})
export class FineModule {}
