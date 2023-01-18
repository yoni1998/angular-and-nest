import { Basisgegevens } from './../models/basisgegevens.interface';
import { BasisgegevensEntity } from './../models/basisgegevens.entity';
import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';

@Injectable()
export class BasisgegevensService {
  constructor(
    @InjectRepository(BasisgegevensEntity)
    private readonly basisgegevensRepo: Repository<BasisgegevensEntity>
  ) {}

  createBasisgegeven(title: Basisgegevens): Observable<Basisgegevens> {
    return from(this.basisgegevensRepo.save(title));
  }

  findAllBasisgegevens(): Observable<Basisgegevens[]> {
    return from(this.basisgegevensRepo.find());
  }

  updateBasisgegeven(
    id: number,
    basisgegeven: Basisgegevens
  ): Observable<UpdateResult> {
    return from(this.basisgegevensRepo.update(id, basisgegeven));
  }

  // moet nog getest worden
  deleteBasisgegeven(id: number): Observable<DeleteResult> {
    return from(this.basisgegevensRepo.delete(id));
  }
}
