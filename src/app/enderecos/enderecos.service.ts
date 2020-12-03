import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endereco } from '../core/model';

export class EnderecoFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class EnderecosService {

  constructor(private http: HttpClient) { }

  enderecosUrl = 'http://localhost:8080/enderecos';

  pesquisar(filtro: EnderecoFiltro): Promise<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.nome) {
      params = params.append('nome', filtro.nome);
    }

    return this.http.get<any>(`${this.enderecosUrl}`, { params })
      .toPromise()
      .then(response => {
        const enderecos = response.content;

        const resultado = {
          enderecos,
          total: response.totalElements
        };
        return resultado;
      });
  }

  buscarPorId(id: number): Promise<Endereco> {
    return this.http.get<Endereco>(`${this.enderecosUrl}/${id}`)
      .toPromise()
      .then(response => {
        const endereco = response;
        return endereco;
      });
  }
}
