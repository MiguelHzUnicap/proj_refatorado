export class Usuario {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  descricao() {
    return `${this.nome} (${this.idade} anos)`;
  }
}

export class Cadastro {
  constructor() {
    this.usuarios = [];
  }

  adicionar(usuario) {
    this.usuarios.push(usuario);
  }

  listar() {
    return this.usuarios;
  }

  mediaIdade() {
    return this.usuarios.length > 0
      ? this.usuarios.reduce((soma, u) => soma + u.idade, 0) / this.usuarios.length
      : 0;
  }
}