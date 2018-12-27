import { TestBed } from '@angular/core/testing';

import { ConexionBDService } from './conexion-bd.service';

describe('ConexionBDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConexionBDService = TestBed.get(ConexionBDService);
    expect(service).toBeTruthy();
  });
});
