import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipamento } from '../core/model';

export class EquipamentoFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class EquipamentosService {

  constructor(private http: HttpClient) { }

  equipamentosUrl = 'http://localhost:8080/equipamentos';

  pesquisar(filtro: EquipamentoFiltro): Promise<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.nome) {
      params = params.append('nome', filtro.nome);
    }

    return this.http.get<any>(`${this.equipamentosUrl}`, { params })
      .toPromise()
      .then(response => {
        const equipamentos = response.content;

        const resultado = {
          equipamentos,
          total: response.totalElements
        };
        return resultado;
      });
  }

  adicionar(equipamento: Equipamento): Promise<Equipamento> {
    return this.http.post<Equipamento>(this.equipamentosUrl, equipamento).toPromise();
  }

  atualizar(equipamento: Equipamento): Promise<Equipamento> {
    return this.http.put<Equipamento>(`${this.equipamentosUrl}/${equipamento.id}`, equipamento)
      .toPromise()
      .then(response => {
        const equipamentoAlterado = response;
        return equipamentoAlterado;
      });
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.equipamentosUrl}/${id}`)
      .toPromise()
      .then(() => null);
  }

  buscarPorId(id: number): Promise<Equipamento> {
    return this.http.get<Equipamento>(`${this.equipamentosUrl}/${id}`)
      .toPromise()
      .then(response => {
        const equipamento = response;
        return equipamento;
      });
  }
}


