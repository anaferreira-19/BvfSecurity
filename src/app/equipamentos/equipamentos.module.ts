import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipamentosCadastroComponent } from './equipamentos-cadastro/equipamentos-cadastro.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [EquipamentosCadastroComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EquipamentosModule { }
