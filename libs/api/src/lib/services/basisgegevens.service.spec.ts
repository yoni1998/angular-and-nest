import { TestBed } from '@angular/core/testing';

import { BasisgegevensService } from './basisgegevens.service';

describe('BasisgegevensService', () => {
  let service: BasisgegevensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasisgegevensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
