import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ClienteAdministradorFiltro, ClientesAdministradorService } from '../clientes-administrador.service';

@Component({
  selector: 'app-clientes-administrador-pesquisa',
  templateUrl: './clientes-administrador-pesquisa.component.html',
  styleUrls: ['./clientes-administrador-pesquisa.component.css']
})
export class ClientesAdministradorPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new ClienteAdministradorFiltro();
  clientesAdministrador = [];

  display: boolean = false;

  @ViewChild('tabela', { static: true }) grid;
  constructor(
    private clientesAdministradorService: ClientesAdministradorService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.pesquisar();
  }

  showDialog() {
    this.display = true;
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.clientesAdministradorService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.clientesAdministrador = resultado.clientesAdministrador;
      });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(clienteAdministrador: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir esse registro?',
      accept: () => {
        this.excluir(clienteAdministrador);
      }
    });
  }

  excluir(clienteAdministrador: any) {
    this.clientesAdministradorService.excluir(clienteAdministrador.id)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
        }
        this.messageService.add({ severity: 'success', detail: 'Registro de cliente administrador excluído com sucesso!' });
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
}
