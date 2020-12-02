import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoInicialComponent } from './conteudo-inicial.component';

describe('ConteudoInicialComponent', () => {
  let component: ConteudoInicialComponent;
  let fixture: ComponentFixture<ConteudoInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteudoInicialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudoInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
