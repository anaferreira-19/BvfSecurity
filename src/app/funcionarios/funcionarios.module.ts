import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionariosPesquisaComponent } from './funcionarios-pesquisa/funcionarios-pesquisa.component';
import { FuncionariosCadastroComponent } from './funcionarios-cadastro/funcionarios-cadastro.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';



@NgModule({
  declarations: [FuncionariosPesquisaComponent, FuncionariosCadastroComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    DialogModule,
    TableModule,
    TooltipModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FuncionariosModule { }
