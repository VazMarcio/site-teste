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
  const container = document.querySelector(".container");
  container.style.backgroundColor = "#BFEFFF";
}

function mostrarMensagem() {
  const info = document.getElementById("info");
  info.textContent = "Você desbloqueou uma mensagem secreta! ✨";
}
