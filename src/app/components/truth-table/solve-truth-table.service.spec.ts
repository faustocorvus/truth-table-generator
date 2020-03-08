import { TestBed } from '@angular/core/testing';

import { SolveTruthTableService } from './solve-truth-table.service';

describe('SolveTruthTableService', () => {
  let service: SolveTruthTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolveTruthTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
