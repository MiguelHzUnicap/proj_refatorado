import { Usuario, Cadastro } from "./classes.js";
import { validarEntrada, renderizarUsuarios, salvarNoLocalStorage, carregarDoLocalStorage } from "./utils.js";

const cadastro = new Cadastro();
const form = document.querySelector("#formUsuario");
const listaUsuarios = document.querySelector("#listaUsuarios");

const STORAGE_KEY = "usuarios";

const dadosSalvos = carregarDoLocalStorage(STORAGE_KEY);
dadosSalvos.forEach(d => cadastro.adicionar(new Usuario(d.nome, d.idade)));
renderizarUsuarios(cadastro.listar(), listaUsuarios);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.querySelector("#nome").value;
  const idade = parseInt(document.querySelector("#idade").value);

  if (!validarEntrada(nome, idade)) {
    alert("Preencha os campos corretamente!");
    return;
  }

  const usuario = new Usuario(nome, idade);
  cadastro.adicionar(usuario);

  renderizarUsuarios(cadastro.listar(), listaUsuarios);
  salvarNoLocalStorage(STORAGE_KEY, cadastro.listar());

  form.reset();
});