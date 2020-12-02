import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitoramentoComponent } from './monitoramento/monitoramento.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AlertasPesquisaComponent } from './alertas-pesquisa/alertas-pesquisa.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { PanelModule } from 'primeng/panel';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MonitoramentoComponent, AlertasPesquisaComponent],
  imports: [
    CommonModule,
    LeafletModule,
    RouterModule,
    SharedModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    AutoCompleteModule,
    PanelModule,

  ]
})
export class MonitoramentoModule { }
