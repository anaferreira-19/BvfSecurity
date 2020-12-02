import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosCadastroComponent } from './veiculos-cadastro.component';

describe('VeiculosCadastroComponent', () => {
  let component: VeiculosCadastroComponent;
  let fixture: ComponentFixture<VeiculosCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculosCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculosCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
