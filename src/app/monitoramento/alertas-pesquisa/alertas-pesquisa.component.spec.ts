import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertasPesquisaComponent } from './alertas-pesquisa.component';

describe('AlertasPesquisaComponent', () => {
  let component: AlertasPesquisaComponent;
  let fixture: ComponentFixture<AlertasPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertasPesquisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertasPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
