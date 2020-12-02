import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosPesquisaComponent } from './funcionarios-pesquisa.component';

describe('FuncionariosPesquisaComponent', () => {
  let component: FuncionariosPesquisaComponent;
  let fixture: ComponentFixture<FuncionariosPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionariosPesquisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionariosPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
