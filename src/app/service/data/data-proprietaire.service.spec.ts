import { TestBed } from '@angular/core/testing';

import { DataProprietaire } from './data-proprietaire.service';

describe('DataProprietaire', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataProprietaire = TestBed.get(DataProprietaire);
    expect(service).toBeTruthy();
  });
});
