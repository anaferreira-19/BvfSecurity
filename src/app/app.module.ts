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
import { VeiculosService } from './veiculos/veiculos.service';
import { VeiculosModule } from './veiculos/veiculos.module';
import { ClientesAdministradorPesquisaComponent } from './clientes-administrador/clientes-administrador-pesquisa/clientes-administrador-pesquisa.component';
import { ErrorHandlerService } from './core/error-handler.service';
import { AlertasPesquisaComponent } from './monitoramento/alertas-pesquisa/alertas-pesquisa.component';
import { ToastModule } from 'primeng/toast';
import { EnderecosService } from './enderecos/enderecos.service';
import { EnderecosModule } from './enderecos/enderecos.module';
import { CategoriasService } from './categorias/categorias.service';
import { CategoriasModule } from './categorias/categorias.module';
import { EnderecosCadastroComponent } from './enderecos/enderecos-cadastro/enderecos-cadastro.component';
import { EnderecosPesquisaComponent } from './enderecos/enderecos-pesquisa/enderecos-pesquisa.component';
import { VeiculosCadastroComponent } from './veiculos/veiculos-cadastro/veiculos-cadastro.component';
import { VeiculosPesquisaComponent } from './veiculos/veiculos-pesquisa/veiculos-pesquisa.component';

// Roteamento Dos Componentes Html:
const routes: Routes = [
  { path: 'tela-inicial', component: ConteudoInicialComponent },
  { path: 'monitoramento', component: MonitoramentoComponent },
  { path: 'monitoramento/alertas', component: AlertasPesquisaComponent },
  { path: 'clientesadministrador', component: ClientesAdministradorPesquisaComponent },
  { path: 'clientesadministrador/novo', component: ClientesAdministradorCadastroComponent },
  { path: 'funcionarios', component: FuncionariosPesquisaComponent },
  { path: 'funcionarios/novo', component: FuncionariosCadastroComponent },
  { path: 'equipamentos/novo', component: EquipamentosCadastroComponent },
  { path: 'veiculos', component: VeiculosPesquisaComponent },
  { path: 'veiculos/novo', component: VeiculosCadastroComponent },
  { path: 'enderecos', component: EnderecosPesquisaComponent },
  { path: 'enderecos/novo', component: EnderecosCadastroComponent }
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
    VeiculosModule,
    EnderecosModule,
    ToastModule,
    CategoriasModule
  ],
  providers: [
    MonitoramentoService,
    ClientesAdministradorService,
    FuncionariosService,
    EquipamentosService,
    VeiculosService,
    ConfirmationService,
    MessageService,
    ErrorHandlerService,
    EnderecosService,
    CategoriasService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
