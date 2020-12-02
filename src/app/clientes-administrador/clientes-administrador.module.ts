import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesAdministradorPesquisaComponent } from './clientes-administrador-pesquisa/clientes-administrador-pesquisa.component';
import { ClientesAdministradorCadastroComponent } from './clientes-administrador-cadastro/clientes-administrador-cadastro.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [ClientesAdministradorPesquisaComponent, ClientesAdministradorCadastroComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    TableModule,
    TooltipModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientesAdministradorModule { }
