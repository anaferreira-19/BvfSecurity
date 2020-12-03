import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CategoriasService } from 'src/app/complementos/categorias.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { VeiculosService } from 'src/app/veiculos/veiculos.service';
import { FuncionariosService } from '../funcionarios.service';

@Component({
  selector: 'app-funcionarios-cadastro',
  templateUrl: './funcionarios-cadastro.component.html',
  styleUrls: ['./funcionarios-cadastro.component.css']
})
export class FuncionariosCadastroComponent implements OnInit {

  funcionarios = [];
  veiculos = [];
  categorias = [];

  formulario: FormGroup;

  constructor(
    private categoriasService: CategoriasService,
    private funcionariosService: FuncionariosService,
    private veiculosService: VeiculosService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }


  ngOnInit() {
    this.configurarFormulario();

    const idFuncionario = this.route.snapshot.params['id'];

    if (idFuncionario) {
      this.carregarFuncionario(idFuncionario);

      this.carregarVeiculos();
      this.carregarCategorias();
    }

  }

  carregarFuncionario(id: number) {
    this.funcionariosService.buscarPorId(id)
      .then(funcionario => {
        this.formulario.patchValue(funcionario);
      }).catch(erro => this.errorHandler.handle(erro));
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      id: [],
      nome: [null, [Validators.required, Validators.minLength(5)]],
      login: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(9)]],
      senha: [null, [Validators.required, Validators.minLength(6)]],
      categoria: this.formBuilder.group({
        id: [null, Validators.required],
        nome: []
      })
    });
  }

  adicionarFuncionario() {
    this.funcionariosService.adicionar(this.formulario.value)
      .then(funcionarioAdicionado => {
        this.messageService.add({ severity: 'success', detail: 'Registo de funcionário adicionado com sucesso!' });
        this.router.navigate(['/funcionarios']);
      }).catch(erro => this.errorHandler.handle(erro));
  }

  get editando() {
    return Boolean(this.formulario.get('id').value);
  }

  salvar() {
    if (this.editando) {
      this.atualizarFuncionario();
    } else {
      this.adicionarFuncionario();
    }
  }

  atualizarFuncionario() {
    this.funcionariosService.atualizar(this.formulario.value)
      .then(funcionario => {
        this.formulario.patchValue(funcionario);
        this.messageService.add({ severity: 'success', detail: 'Registro de funcionário alterado com sucesso!' });
      }).catch(erro => this.errorHandler.handle(erro));
  }
  carregarVeiculos() {
    return this.veiculosService.listarTodosVeiculos()
      .then(veiculos => {
        this.veiculos = veiculos
          .map(v => ({ label: v.nome, value: v.id }));
      }).catch(erro => this.errorHandler.handle(erro));
  }

  carregarCategorias() {
    return this.categoriasService.listarTodasCategorias()
      .then(categorias => {
        this.categorias = categorias
          .map(c => ({ label: c.nome, value: c.id }));
      }).catch(erro => this.errorHandler.handle(erro));
  }

}
