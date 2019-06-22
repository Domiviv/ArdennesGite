import { TestBed } from '@angular/core/testing';

import { DataGiteService } from './data-gite.service';

describe('DataGiteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataGiteService = TestBed.get(DataGiteService);
    expect(service).toBeTruthy();
  });
});
