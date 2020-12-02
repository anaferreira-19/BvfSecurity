import { TestBed } from '@angular/core/testing';

import { ClientesAdministradorService } from './clientes-administrador.service';

describe('ClientesAdministradorService', () => {
  let service: ClientesAdministradorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientesAdministradorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
