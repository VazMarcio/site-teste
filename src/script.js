function mostrarAlerta() {
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = "Você clicou no botão! 🎉";
}
function mostrarAlerta() {
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = "Você clicou no botão! 🎉";
}

function mostrarData() {
  const info = document.getElementById("info");
  const dataAtual = new Date().toLocaleDateString("pt-BR");
  info.textContent = `Data atual: ${dataAtual}`;
}

function mudarCor() {
  document.body.style.backgroundColor = "#BFEFFF"; // azul bebê
}

function mostrarMensagem() {
  const info = document.getElementById("info");
  info.textContent = "Você desbloqueou uma mensagem secreta! ✨";
}
