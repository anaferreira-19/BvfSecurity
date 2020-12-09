import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcionario } from '../core/model';

export class FuncionarioFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  constructor(private http: HttpClient) { }

  funcionariosUrl = 'http://localhost:8080/funcionarios';

  pesquisar(filtro: FuncionarioFiltro): Promise<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.nome) {
      params = params.append('nome', filtro.nome);
    }

    return this.http.get<any>(`${this.funcionariosUrl}`, { params })
      .toPromise()
      .then(response => {
        const funcionarios = response.content;

        const resultado = {
          funcionarios,
          total: response.totalElements
        }
        return resultado;
      });
  }

  adicionar(funcionario: Funcionario): Promise<Funcionario> {
    return this.http.post<Funcionario>(this.funcionariosUrl, funcionario).toPromise();
  }

  atualizar(funcionario: Funcionario): Promise<Funcionario> {
    return this.http.put<Funcionario>(`${this.funcionariosUrl}/${funcionario.id}`, funcionario)
      .toPromise()
      .then(response => {
        const funcionarioAlterado = response;
        return funcionarioAlterado;
      });
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.funcionariosUrl}/${id}`)
      .toPromise()
      .then(() => null);
  }

  buscarPorId(id: number): Promise<Funcionario> {
    return this.http.get<Funcionario>(`${this.funcionariosUrl}/${id}`)
      .toPromise()
      .then(response => {
        const funcionario = response;
        return funcionario;
      });
  }
}

