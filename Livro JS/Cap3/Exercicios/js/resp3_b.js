function verificarVelocidade() {
  var inVelocidadePermitida = document.getElementById("inVelocidadePermitida");
  var inVelocidadeCondutor = document.getElementById("inVelocidadeCondutor");
  var outSituacao = document.getElementById("outSituacao");

  var velocidadePermitida = Number(inVelocidadePermitida.value);
  var velocidadeCondutor = Number(inVelocidadeCondutor.value);

  if (velocidadePermitida == "" || isNaN(velocidadePermitida)) {
    alert("Esse campo não foi preenchido corretamente!");
    inVelocidadePermitida.focus();
    return;
  }

  if (velocidadeCondutor == "" || isNaN(velocidadeCondutor)) {
    alert("Esse campo não foi preenchido corretamente!");
    inVelocidadeCondutor.focus();
    return;
  }

  if (velocidadeCondutor <= velocidadePermitida) {
    outSituacao.textContent = "Situação: Sem Multa";
  } else if (velocidadeCondutor <= (120 / 100) * velocidadePermitida && velocidadeCondutor > velocidadePermitida) {
    outSituacao.textContent = "Situação: Multa Leve";
  } else {
    outSituacao.textContent = "Situação: Multa Grave";
  }
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarVelocidade);