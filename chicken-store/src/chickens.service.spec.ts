import { TestBed } from '@angular/core/testing';

import { ChickensService } from './chickens.service';

describe('ChickensService', () => {
  let service: ChickensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChickensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
