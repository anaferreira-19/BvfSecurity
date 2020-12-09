import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecosCadastroComponent } from './enderecos-cadastro.component';

describe('EnderecosCadastroComponent', () => {
  let component: EnderecosCadastroComponent;
  let fixture: ComponentFixture<EnderecosCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnderecosCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecosCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
