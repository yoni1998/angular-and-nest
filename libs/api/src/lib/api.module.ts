import { BasisgegevensController } from './controllers/basisgegevensController';
import { BasisgegevensEntity } from './models/basisgegevens.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BasisgegevensService } from './services/basisgegevens.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([BasisgegevensEntity])],
  controllers: [BasisgegevensController],
  providers: [BasisgegevensService],
  exports: [],
})
export class ApiModule {}
