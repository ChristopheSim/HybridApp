import { TestBed } from '@angular/core/testing';

import { BreweriesServService } from './breweries-serv.service';

describe('BreweriesServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BreweriesServService = TestBed.get(BreweriesServService);
    expect(service).toBeTruthy();
  });
});
