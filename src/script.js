
// Altera o texto do parágrafo com id "mensagem" quando o botão principal é clicado
function mostrarAlerta() {
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = mensagem.textContent = "Você abriu a primeira porta. O que vem depois depende de você. 🔑";
}

// Mostra a data atual no parágrafo com id "info"
function mostrarData() {
  const info = document.getElementById("info");
  const dataAtual = new Date().toLocaleDateString("pt-BR");
  info.textContent = `Data atual: ${dataAtual}`;
}

// Altera a cor de fundo da caixa de conteúdo (container)
function mudarCor() {
  const container = document.querySelector(".container");
  container.style.backgroundColor = "#BFEFFF";
}

// Exibe uma mensagem secreta no parágrafo com id "info"
function mostrarMensagem() {
  const info = document.getElementById("info");
  info.textContent = "O segredo do sucesso é nunca parar de aprender! 🚀";
};

