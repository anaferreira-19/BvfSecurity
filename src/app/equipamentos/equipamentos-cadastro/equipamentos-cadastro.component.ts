import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { EquipamentoFiltro, EquipamentosService } from '../equipamentos.service';

@Component({
  selector: 'app-equipamentos-cadastro',
  templateUrl: './equipamentos-cadastro.component.html',
  styleUrls: ['./equipamentos-cadastro.component.css']
})
export class EquipamentosCadastroComponent implements OnInit {

  equipamentos = [];

  formulario: FormGroup;

  constructor(
    private equipamentosService: EquipamentosService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService,
  ) { }

  ngOnInit() {
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      id: [],
      nome: [null, [Validators.required, Validators.minLength(5)]],
    });
  }

  get editando() {
    return Boolean(this.formulario.get('id').value);
  }

  salvar() {
    if (this.editando) {
      this.atualizarEquipamento();
    } else {
      this.adicionarEquipamento();
    }
  }

  adicionarEquipamento() {
    this.equipamentosService.adicionar(this.formulario.value)
      .then(equipamentoAdicionado => {
        this.messageService.add({ severity: 'success', detail: 'Equipamento adicionado com sucesso!' });
        this.router.navigate(['/equipamentos']);
      }).catch(erro => this.errorHandler.handle(erro));
  }

  atualizarEquipamento() {
    this.equipamentosService.atualizar(this.formulario.value)
      .then(equipamento => {
        this.formulario.patchValue(equipamento);
        this.messageService.add({ severity: 'success', detail: 'Equipamento alterado com sucesso!' });
      }).catch(erro => this.errorHandler.handle(erro));
  }
}
