import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { FuncionarioFiltro, FuncionariosService } from '../funcionarios.service';

@Component({
  selector: 'app-funcionarios-pesquisa',
  templateUrl: './funcionarios-pesquisa.component.html',
  styleUrls: ['./funcionarios-pesquisa.component.css']
})
export class FuncionariosPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new FuncionarioFiltro();
  funcionarios = [];

  @ViewChild('tabela', { static: true }) grid;
  display: boolean = false;
  constructor(
    private funcionariosService: FuncionariosService,
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

    this.funcionariosService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.funcionarios = resultado.funcionarios;
      });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(funcionario: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir esse registro?',
      accept: () => {
        this.excluir(funcionario);
      }
    });
  }

  excluir(funcionario: any) {
    this.funcionariosService.excluir(funcionario.id)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
        }
        this.messageService.add({ severity: 'success', detail: 'Registro de funcionário excluído com sucesso!' });
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
}
