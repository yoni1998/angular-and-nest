import { UpdateResult, DeleteResult } from 'typeorm';
import { Basisgegevens } from './../models/basisgegevens.interface';
import { BasisgegevensService } from '../services/basisgegevens.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Controller('basisgegevens')
export class BasisgegevensController {
  constructor(private basisgegevensService: BasisgegevensService) {}

  @Post()
  create(@Body() title: Basisgegevens): Observable<Basisgegevens> {
    return this.basisgegevensService.createBasisgegeven(title);
  }

  @Get()
  findAll(): Observable<Basisgegevens[]> {
    {
      return this.basisgegevensService.findAllBasisgegevens();
    }
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() basisgegeven: Basisgegevens
  ): Observable<UpdateResult> {
    return this.basisgegevensService.updateBasisgegeven(id, basisgegeven);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.basisgegevensService.deleteBasisgegeven(id);
  }
}
