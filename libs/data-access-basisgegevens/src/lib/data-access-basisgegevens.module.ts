import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasisgegevensService } from './basisgegevens.service';

@NgModule({
  imports: [CommonModule],
  providers: [BasisgegevensService],
})
export class DataAccessBasisgegevensModule {}
