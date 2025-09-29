const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      "<p class= 'font-2-l' style= 'gridd-column:1/-1; padding: 1rem; border-radius:4px; background: #f7f7f7;'><span style='color: #317A00;'>Mensagem enviada!</span> Em breve entraremos em contato. Geralmente respondemos em 24 horas.</p>";
  } else {
    formulario.innerHTML =
      "<p class= 'font-2-l' style= 'gridd-column:1/-1; padding: 1rem; border-radius:4px; background: #f7f7f7;'><span style='color: #E00000;'>Erro no envio</span>, você pode enviar diretamente para o nosso email em: comercial@bikcraft.anaterdolino.com</p>";
  }
}

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerText = "Enviando...";

  const data = new FormData(formulario);

  console.log(data.get("email"));

  fetch("./enviar.php", {
    method: "POST",
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);
