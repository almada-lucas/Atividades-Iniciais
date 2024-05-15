var numContas = 0;
var valTotal = 0;

var resposta = "";

function registrarConta() {
  var inConta = document.getElementById("inConta");
  var inValor = document.getElementById("inValor");
  var outConta = document.getElementById("outConta");
  var outTotal = document.getElementById("outTotal");

  var descricao = inConta.value;
  var valor = Number(inValor.value);

  if (descricao == "" || valor == 0 || isNaN(valor)) {
    alert("Informe os dados corretamente...");
    inConta.focus();
    return;
  }

  numContas++;
  valTotal = valTotal + valor;

  resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n";

  outConta.textContent = resposta + "---------------------------------------------";
  outTotal.textContent = numContas + " Conta(s) - Total R$: " + valTotal.toFixed(2);

  inConta.value = "";
  inValor.value = "";
  inConta.focus();
}
var btRegistrar = document.getElementById("btRegistrar");
btRegistrar.addEventListener("click", registrarConta);