import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipamentosCadastroComponent } from './equipamentos-cadastro.component';

describe('EquipamentosCadastroComponent', () => {
  let component: EquipamentosCadastroComponent;
  let fixture: ComponentFixture<EquipamentosCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipamentosCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipamentosCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
