import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesAdministradorCadastroComponent } from './clientes-administrador-cadastro.component';

describe('ClientesAdministradorCadastroComponent', () => {
  let component: ClientesAdministradorCadastroComponent;
  let fixture: ComponentFixture<ClientesAdministradorCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesAdministradorCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesAdministradorCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
