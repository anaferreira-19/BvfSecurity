import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veiculo } from '../core/model';

export class VeiculoFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  constructor(private http: HttpClient) { }

  veiculosUrl = 'http://localhost:8080/veiculos';

  pesquisar(filtro: VeiculoFiltro): Promise<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.nome) {
      params = params.append('nome', filtro.nome);
    }

    return this.http.get<any>(`${this.veiculosUrl}`, { params })
      .toPromise()
      .then(response => {
        const veiculos = response.content;

        const resultado = {
          veiculos,
          total: response.totalElements
        };
        return resultado;
      });
  }

  adicionar(veiculo: Veiculo): Promise<Veiculo> {
    return this.http.post<Veiculo>(this.veiculosUrl, veiculo).toPromise();
  }

  atualizar(veiculo: Veiculo): Promise<Veiculo> {
    return this.http.put<Veiculo>(`${this.veiculosUrl}/${veiculo.id}`, veiculo)
      .toPromise()
      .then(response => {
        const veiculoAlterado = response;
        return veiculoAlterado;
      });
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.veiculosUrl}/${id}`)
      .toPromise()
      .then(() => null);
  }

  buscarPorId(id: number): Promise<Veiculo> {
    return this.http.get<Veiculo>(`${this.veiculosUrl}/${id}`)
      .toPromise()
      .then(response => {
        const veiculo = response;
        return veiculo;
      });
  }

  listarTodosVeiculos(): Promise<Veiculo[]> {
    return this.http.get<Veiculo[]>(`${this.veiculosUrl}/todos`).toPromise();
  }
}
