import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteAdministrador } from '../core/model';

export class ClienteAdministradorFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class ClientesAdministradorService {

  constructor(private http: HttpClient) { }

  clientesAdministradorUrl = 'http://localhost:8080/clientesadministrador';

  pesquisar(filtro: ClienteAdministradorFiltro): Promise<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.nome) {
      params = params.append('nome', filtro.nome);
    }

    return this.http.get<any>(`${this.clientesAdministradorUrl}`, { params })
      .toPromise()
      .then(response => {
        const clientesAdministrador = response.content;

        const resultado = {
          clientesAdministrador,
          total: response.totalElements
        };
        return resultado;
      });
  }

  adicionar(clienteAdministrador: ClienteAdministrador): Promise<ClienteAdministrador> {
    return this.http.post<ClienteAdministrador>(this.clientesAdministradorUrl, clienteAdministrador).toPromise();
  }

  atualizar(clienteAdministrador: ClienteAdministrador): Promise<ClienteAdministrador> {
    return this.http.put<ClienteAdministrador>(`${this.clientesAdministradorUrl}/${clienteAdministrador.id}`, clienteAdministrador)
      .toPromise()
      .then(response => {
        const clienteAdministradorAlterado = response;
        return clienteAdministradorAlterado;
      });
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.clientesAdministradorUrl}/${id}`)
      .toPromise()
      .then(() => null);
  }

  buscarPorId(id: number): Promise<ClienteAdministrador> {
    return this.http.get<ClienteAdministrador>(`${this.clientesAdministradorUrl}/${id}`)
      .toPromise()
      .then(response => {
        const clienteAdministrador = response;
        return clienteAdministrador;
      });
  }
}
