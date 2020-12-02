import { TestBed } from '@angular/core/testing';

import { MonitoramentoService } from './monitoramento.service';

describe('MonitoramentoService', () => {
  let service: MonitoramentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonitoramentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
