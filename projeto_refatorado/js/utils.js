export function validarEntrada(nome, idade) {
  return nome.trim() !== "" && idade > 0;
}

export function renderizarUsuarios(lista, elemento) {
  elemento.innerHTML = lista
    .map(usuario => `<li>${usuario.descricao()}</li>`)
    .join("");
}

export function salvarNoLocalStorage(chave, dados) {
  localStorage.setItem(chave, JSON.stringify(dados));
}

export function carregarDoLocalStorage(chave) {
  const dados = localStorage.getItem(chave);
  return dados ? JSON.parse(dados) : [];
}