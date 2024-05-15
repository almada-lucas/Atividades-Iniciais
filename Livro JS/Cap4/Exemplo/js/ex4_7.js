function criarEstrelas() {
  var inQuant = document.getElementById("inQuant");
  var outResultado = document.getElementById("outResultado");

  var num = Number(inQuant.value);

  if (num == 0 || isNaN(num)) {
    alert("Número Inválido...");
    inQuant.focus();
    return;
  }

  var estrelas = "";

  for (var i = 1; i <= num; i++) {
    if (i % 2 == 1) {
      estrelas = estrelas + "*";
    } else {
      estrelas = estrelas + "-";
    }
  }

  outResultado.textContent = estrelas;
}
var btPreencher = document.getElementById("btPreencher");
btPreencher.addEventListener("click", criarEstrelas);