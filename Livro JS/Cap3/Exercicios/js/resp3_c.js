function calcularTempo() {
  var inValor = document.getElementById("inValor");
  var outTempo = document.getElementById("outTempo");
  var outTroco = document.getElementById("outTroco");

  var valor = Number(inValor.value);
  var troco

  if (valor == "" || isNaN(valor)) {
    alert("O campo não foi preenchido corretamente!");
    inValor.focus();
    return;
  }

  if (valor >= 1 && valor < 1.75) {
    outTempo.textContent = "Tempo: 30 min";
    troco = valor - 1
    outTroco.textContent = "Troco R$: " + troco;
  } else if (valor >= 1.75 && valor < 3) {
    outTempo.textContent = "Tempo: 60 min";
    troco = valor - 1.75
    outTroco.textContent = "Troco R$: " + troco;
  } else if (valor >= 3) {
    outTempo.textContent = "Tempo: 120 min";
    troco = valor - 3
    outTroco.textContent = "Troco R$: " + troco;
  } else {
    alert("Valor Insuficiente!");
    inValor.focus();
    return;
  }
}       
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularTempo);