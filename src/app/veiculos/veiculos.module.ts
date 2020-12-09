import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { VeiculosCadastroComponent } from './veiculos-cadastro/veiculos-cadastro.component';
import { VeiculosPesquisaComponent } from './veiculos-pesquisa/veiculos-pesquisa.component';


@NgModule({
  declarations: [VeiculosCadastroComponent, VeiculosPesquisaComponent],
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
