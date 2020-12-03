import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ClienteAdministrador } from 'src/app/core/model';
import { ClientesAdministradorService } from '../clientes-administrador.service';


@Component({
  selector: 'app-clientes-administrador-cadastro',
  templateUrl: './clientes-administrador-cadastro.component.html',
  styleUrls: ['./clientes-administrador-cadastro.component.css']
})
export class ClientesAdministradorCadastroComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clientesAdministradorService: ClientesAdministradorService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.configurarFormulario();

   
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      id: [],
      nome: [null, [Validators.required, Validators.minLength(5)]],
      telefone: [null, [Validators.required]],
      cpf: [null,[Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(5)]]
    });
  }

  get editando() {
    return Boolean(this.formulario.get('id').value);
  }

  salvar() {
    if (this.editando) {
      this.atualizarClienteAdministradores();
    } else {
      this.adicionarClienteAdministrador();
    }
  }

  adicionarClienteAdministrador() {
    this.clientesAdministradorService.adicionar(this.formulario.value)
      .then(clienteAdicionada => {
        this.messageService.add({ severity: 'success', detail: 'Cliente adicionado com sucesso!' });
        this.router.navigate(['/clientesadministrador']);
      }).catch(erro => this.errorHandler.handle(erro));
  }

  atualizarClienteAdministradores() {
    this.clientesAdministradorService.atualizar(this.formulario.value)
      .then(ClienteAdministrador => {
        this.formulario.patchValue(ClienteAdministrador);
        this.messageService.add({ severity: 'success', detail: 'Cliente alterado com sucesso!' });
      }).catch(erro => this.errorHandler.handle(erro));
  }

}
