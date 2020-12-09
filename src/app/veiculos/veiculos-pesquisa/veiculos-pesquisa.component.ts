import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { VeiculoFiltro, VeiculosService } from '../veiculos.service';

@Component({
  selector: 'app-veiculos-pesquisa',
  templateUrl: './veiculos-pesquisa.component.html',
  styleUrls: ['./veiculos-pesquisa.component.css']
})
export class VeiculosPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new VeiculoFiltro();
  veiculos = [];

  @ViewChild('tabela', { static: true }) grid;
  constructor(
    private veiculosService: VeiculosService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.veiculosService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.veiculos = resultado.veiculos;
      });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(veiculo: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir esse registro?',
      accept: () => {
        this.excluir(veiculo);
      }
    });
  }

  excluir(veiculo: any) {
    this.veiculosService.excluir(veiculo.id)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
        }
        this.messageService.add({ severity: 'success', detail: 'Registro de veículo excluído com sucesso!' });
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
}
