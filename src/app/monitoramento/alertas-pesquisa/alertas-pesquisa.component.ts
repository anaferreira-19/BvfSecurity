import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AlertasFiltro, MonitoramentoService } from '../monitoramento.service';

@Component({
  selector: 'app-alertas-pesquisa',
  templateUrl: './alertas-pesquisa.component.html',
  styleUrls: ['./alertas-pesquisa.component.css']
})
export class AlertasPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new AlertasFiltro();
  alertas = [];

  @ViewChild('tabela', { static: true }) grid;
  constructor(
    private monitoramentoService: MonitoramentoService
  ) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.monitoramentoService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.alertas = resultado.alertas;
      });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }
}
