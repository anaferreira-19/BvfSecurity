import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesAdministradorPesquisaComponent } from './clientes-administrador-pesquisa.component';

describe('ClientesAdministradorPesquisaComponent', () => {
  let component: ClientesAdministradorPesquisaComponent;
  let fixture: ComponentFixture<ClientesAdministradorPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesAdministradorPesquisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesAdministradorPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
