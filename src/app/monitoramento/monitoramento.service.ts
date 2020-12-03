import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alerta } from '../core/model';

export class AlertasFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class MonitoramentoService {

  constructor(private http: HttpClient) { }

  alertasUrl = 'http://localhost:8080/alertas';

  pesquisar(filtro: AlertasFiltro): Promise<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.nome) {
      params = params.append('nome', filtro.nome);
    }

    return this.http.get<any>(`${this.alertasUrl}`, { params })
      .toPromise()
      .then(response => {
        const alertas = response.content;

        const resultado = {
          alertas,
          total: response.totalElements
        };
        return resultado;
      });
  }

  adicionar(alerta: Alerta): Promise<Alerta> {
    return this.http.post<Alerta>(this.alertasUrl, alerta).toPromise();
  }

  atualizar(alerta: Alerta): Promise<Alerta> {
    return this.http.put<Alerta>(`${this.alertasUrl}/${alerta.id}`, alerta)
      .toPromise()
      .then(response => {
        const alertaAlterado = response;
        return alertaAlterado;
      });
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.alertasUrl}/${id}`)
      .toPromise()
      .then(() => null);
  }

  buscarPorId(id: number): Promise<Alerta> {
    return this.http.get<Alerta>(`${this.alertasUrl}/${id}`)
      .toPromise()
      .then(response => {
        const alerta = response;
        return alerta;
      });
  }
}
