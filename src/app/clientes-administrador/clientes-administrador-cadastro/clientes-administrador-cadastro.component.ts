import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ClientesAdministradorService } from '../clientes-administrador.service';

@Component({
  selector: 'app-clientes-administrador-cadastro',
  templateUrl: './clientes-administrador-cadastro.component.html',
  styleUrls: ['./clientes-administrador-cadastro.component.css']
})
export class ClientesAdministradorCadastroComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private clientesAdministradorService: ClientesAdministradorService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    
  }
}
