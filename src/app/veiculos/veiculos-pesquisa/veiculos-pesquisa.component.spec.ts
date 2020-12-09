import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosPesquisaComponent } from './veiculos-pesquisa.component';

describe('VeiculosPesquisaComponent', () => {
  let component: VeiculosPesquisaComponent;
  let fixture: ComponentFixture<VeiculosPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculosPesquisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculosPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
