import { Basisgegevens } from './../../../../api/src/lib/models/basisgegevens.interface';
import { BasisgegevensService } from '../../../.././data-access-basisgegevens/src/lib/basisgegevens.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'angular-and-nest-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() settings: unknown;
  basisgegevens: Basisgegevens[] = [];
  showInput = false;

  buttonClicked() {
    this.showInput = true;
  }

  constructor(private basisgegevensService: BasisgegevensService) {}

  getBasisgegevens(): void {
    this.basisgegevensService
      .getBasisgegevens()
      .subscribe((basisgegevens: any) => (this.basisgegevens = basisgegevens));
  }

  addNewBasisgegeven(navTitle: string): void {
    if (navTitle) {
      this.basisgegevensService
        .addBasisgegeven({ navTitle } as any)
        .subscribe((title) => {
          this.basisgegevens.push(title);
        });
    }
  }

  removeBasisgegeven(id: number): void {
    this.basisgegevensService.removeBasisgeven(id).subscribe(() => {
      this.getBasisgegevens();
    });
  }

  ngOnInit(): void {
    this.getBasisgegevens();
  }
}
