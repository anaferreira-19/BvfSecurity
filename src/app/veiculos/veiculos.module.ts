import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculosCadastroComponent } from './veiculos-cadastro/veiculos-cadastro.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [VeiculosCadastroComponent],
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
export class VeiculosModule { }
