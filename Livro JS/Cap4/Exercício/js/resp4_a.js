function multiFruta() {
  var inFruta = document.getElementById("inFruta");
  var inNumero = document.getElementById("inNumero");
  var outSaida = document.getElementById("outSaida");

  var fruta = inFruta.value;
  var numero = inNumero.value;

  if (fruta == "") {
    alert("Campo Inválido...");
    inFruta.focus();
    return;
  }

  if (numero == "" || isNaN(numero)) {
    alert("Campo Inválido...");
    inNumero.focus();
    return;
  }

  var resposta = "";

  for (var i = 1; i < numero; i++) {
    resposta = resposta + fruta + " * ";
  }

  if (i = numero) {
    resposta = resposta + fruta;
  }

  outSaida.textContent = resposta;
}
var btAcao = document.getElementById("btAcao");
btAcao.addEventListener("click", multiFruta);