import { TestBed } from '@angular/core/testing';

import { ExpressionInputService } from './expression-input.service';

describe('ExpressionInputService', () => {
  let service: ExpressionInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpressionInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
