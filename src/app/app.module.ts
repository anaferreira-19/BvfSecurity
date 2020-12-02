import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


import { ConteudoInicialComponent } from './tela-inicial/conteudo-inicial/conteudo-inicial.component';
import { CoreModule } from './core/core.module';
import { ConfirmationService, MessageService, SharedModule } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MonitoramentoComponent } from './monitoramento/monitoramento/monitoramento.component';

import { ClientesAdministradorCadastroComponent } from './clientes-administrador/clientes-administrador-cadastro/clientes-administrador-cadastro.component';
import { MonitoramentoModule } from './monitoramento/monitoramento.module';
import { ClientesAdministradorModule } from './clientes-administrador/clientes-administrador.module';
import { TelaInicialModule } from './tela-inicial/tela-inicial.module';
import { ClientesAdministradorService } from './clientes-administrador/clientes-administrador.service';
import { MonitoramentoService } from './monitoramento/monitoramento.service';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { FuncionariosPesquisaComponent } from './funcionarios/funcionarios-pesquisa/funcionarios-pesquisa.component';
import { FuncionariosCadastroComponent } from './funcionarios/funcionarios-cadastro/funcionarios-cadastro.component';
import { FuncionariosService } from './funcionarios/funcionarios.service';
import { EquipamentosModule } from './equipamentos/equipamentos.module';
import { EquipamentosService } from './equipamentos/equipamentos.service';
import { EquipamentosCadastroComponent } from './equipamentos/equipamentos-cadastro/equipamentos-cadastro.component';
import { VeiculosCadastroComponent } from './veiculos/veiculos-cadastro/veiculos-cadastro.component';
import { VeiculosService } from './veiculos/veiculos.service';
import { VeiculosModule } from './veiculos/veiculos.module';
import { ClientesAdministradorPesquisaComponent } from './clientes-administrador/clientes-administrador-pesquisa/clientes-administrador-pesquisa.component';
import { ErrorHandlerService } from './core/error-handler.service';
import { AlertasPesquisaComponent } from './monitoramento/alertas-pesquisa/alertas-pesquisa.component';


// Roteamento Dos Componentes Html:
const routes: Routes = [
  { path: 'tela-inicial', component: ConteudoInicialComponent },
  { path: 'monitoramento', component: MonitoramentoComponent },
  { path: 'monitoramento/alertas', component: AlertasPesquisaComponent },
  { path: 'clientes-administrador', component: ClientesAdministradorPesquisaComponent },
  { path: 'clientes-administrador/novo-cliente-administrador', component: ClientesAdministradorCadastroComponent },
  { path: 'funcionarios', component: FuncionariosPesquisaComponent },
  { path: 'funcionarios/novo-funcionario', component: FuncionariosCadastroComponent },
  { path: 'equipamentos/novo-equipamento', component: EquipamentosCadastroComponent },
  { path: 'veiculos/novo-veiculo', component: VeiculosCadastroComponent }
]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    CoreModule,
    SharedModule,
    ConfirmDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MonitoramentoModule,
    ClientesAdministradorModule,
    TelaInicialModule,
    FuncionariosModule,
    EquipamentosModule,
    VeiculosModule
  ],
  providers: [
    MonitoramentoService,
    ClientesAdministradorService,
    FuncionariosService,
    EquipamentosService,
    VeiculosService,
    ConfirmationService,
    MessageService,
    ErrorHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
