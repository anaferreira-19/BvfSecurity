import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { VeiculosService } from '../veiculos.service';

@Component({
  selector: 'app-veiculos-cadastro',
  templateUrl: './veiculos-cadastro.component.html',
  styleUrls: ['./veiculos-cadastro.component.css']
})
export class VeiculosCadastroComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private veiculosService: VeiculosService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService,
  ) { }

  ngOnInit() {
    this.configurarFormulario();

    const idVeiculo = this.route.snapshot.params['id'];

    if (idVeiculo) {
      this.carregarVeiculo(idVeiculo);
    }
  }

  carregarVeiculo(id: number) {
    this.veiculosService.buscarPorId(id)
      .then(veiculo => {
        this.formulario.patchValue(veiculo);
      }).catch(erro => this.errorHandler.handle(erro));
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      id: [],
      nome: [null, [Validators.required, Validators.minLength(5)]],
      cor: [null, [Validators.required]],
      placa: [null, [Validators.required]]
    });
  }

  get editando() {
    return Boolean(this.formulario.get('id').value);
  }

  salvar() {
    if (this.editando) {
      this.atualizarVeiculo();
    } else {
      this.adicionarVeiculo();
    }
  }

  adicionarVeiculo() {
    this.veiculosService.adicionar(this.formulario.value)
      .then(veiculoAdicionado => {
        this.messageService.add({ severity: 'success', detail: 'Veiculo adicionado com sucesso!' });
        this.router.navigate(['/veiculos']);
      }).catch(erro => this.errorHandler.handle(erro));
  }

  atualizarVeiculo() {
    this.veiculosService.atualizar(this.formulario.value)
      .then(veiculo => {
        this.formulario.patchValue(veiculo);
        this.messageService.add({ severity: 'success', detail: 'Veiculo alterado com sucesso!' });
      }).catch(erro => this.errorHandler.handle(erro));
  }
}
