import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CategoriasService } from 'src/app/categorias/categorias.service';
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
    private funcionariosService: FuncionariosService,
    private categoriasService: CategoriasService,
    private veiculosService: VeiculosService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }


  ngOnInit() {
    this.configurarFormulario();

    this.carregarCategorias();
    this.carregarVeiculos();

    const idFuncionario = this.route.snapshot.params['id'];

    if (idFuncionario) {
      this.carregarFuncionario(idFuncionario);
    }
  }

  carregarFuncionario(id: number) {
    this.funcionariosService.buscarPorId(id)
      .then(funcionarios => {
        this.formulario.patchValue(funcionarios);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      id: [],
      nome: [null, [Validators.required, Validators.minLength(5)]],
      login: [null, [Validators.required, Validators.minLength(3)]],
      senha: [null, [Validators.required, Validators.minLength(6)]],
      categoria: this.formBuilder.group({
        id: [null, Validators.required],
        nome: []
      }),
      veiculo: this.formBuilder.group({
        id: [null, Validators.required],
        nome: []
      })
    });
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

  adicionarFuncionario() {
    this.funcionariosService.adicionar(this.formulario.value)
      .then(funcionario => {
        this.messageService.add({ severity: 'success', detail: 'Funcionário adicionado com sucesso!' });
        this.router.navigate(['/funcionarios']);
      }).catch(erro => this.errorHandler.handle(erro));
  }

  atualizarFuncionario() {
    this.funcionariosService.atualizar(this.formulario.value)
      .then(funcionario => {
        this.formulario.patchValue(funcionario);
        this.messageService.add({ severity: 'success', detail: 'Funcionário alterado com sucesso!' });
      }).catch(erro => this.errorHandler.handle(erro));
  }

  carregarCategorias() {
    return this.categoriasService.listarTodasCategorias()
      .then(categorias => {
        this.categorias = categorias
          .map(c => ({ label: c.nome, value: c.id }));
          console.log(categorias);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarVeiculos() {
    return this.veiculosService.listarTodosVeiculos()
      .then(veiculos => {
        this.veiculos = veiculos
          .map(v => ({ label: v.nome, value: v.id }));

          console.log(veiculos);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
}

