import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecosPesquisaComponent } from './enderecos-pesquisa.component';

describe('EnderecosPesquisaComponent', () => {
  let component: EnderecosPesquisaComponent;
  let fixture: ComponentFixture<EnderecosPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnderecosPesquisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecosPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
