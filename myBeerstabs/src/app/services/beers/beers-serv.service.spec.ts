import { TestBed } from '@angular/core/testing';

import { BeersServService } from './beers-serv.service';

describe('BeersServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeersServService = TestBed.get(BeersServService);
    expect(service).toBeTruthy();
  });
});
