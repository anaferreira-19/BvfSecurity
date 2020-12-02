import { Time } from '@angular/common';

export class Categoria {
    id: number;
    nome: string;
}

export class CategoriaCelular {
    id: number;
    nome: string;
}

export class Pais {
    id: number;
    nome: string;
}

export class Estado {
    id: number;
    nome: string;
    sigla: string;
    pais = new Pais();
}

export class Cidade {
    id: number;
    nome: string;
    estado = new Estado();
}

export class Endereco {
    id: number;
    nome: string;
    rua: string;
    numero: string;
    cep: string;
    bairro: string;
    latitude: number;
    longitude: number;
    cidade = new Cidade();
}

export class Equipamento {
    id: number;
    nome: string;
    endereco = new Endereco();
}

export class Alerta {
    id: number;
    data: Date;
    hora: Time;
    equipamento = new Equipamento();
}

export class Veiculo {
    id: number;
    nome: string;
    cor: string;
    placa: string;
}

export class ClienteAdministrador {
    id: number;
    nome: string;
    cpf: string;
    telefone: string;
    login: string;
    senha: string;
}

export class ClienteFuncionario{
    id: number;
    nome: string;
    cpf: string;
    telefone: string;
    email: string;
    senha: string;
    categoriaCelular = new CategoriaCelular();
    clienteAdministrador = new ClienteAdministrador();
}

export class Funcionario {
    id: number;
    nome: string;
    login: string;
    senha: string;
    categoria = new Categoria();
    veiculo = new Veiculo();
}
