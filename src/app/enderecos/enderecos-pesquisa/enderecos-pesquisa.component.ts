import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { EnderecoFiltro, EnderecosService } from '../enderecos.service';

@Component({
  selector: 'app-enderecos-pesquisa',
  templateUrl: './enderecos-pesquisa.component.html',
  styleUrls: ['./enderecos-pesquisa.component.css']
})
export class EnderecosPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new EnderecoFiltro();
  enderecos = [];

  display: boolean = false;

  @ViewChild('tabela', { static: true }) grid;
  constructor(
    private enderecosService: EnderecosService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit(): void {
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.enderecosService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.enderecos = resultado.clientesAdministrador;
      });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(endereco: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir esse registro?',
      accept: () => {
        this.excluir(endereco);
      }
    });
  }

  excluir(endereco: any) {
    this.enderecosService.excluir(endereco.id)
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

