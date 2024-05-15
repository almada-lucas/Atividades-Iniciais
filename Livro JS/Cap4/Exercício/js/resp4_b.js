function mostrarPrevisao() {
  var inQuant = document.getElementById("inQuant");
  var inAnos = document.getElementById("inAnos");
  var outResultado = document.getElementById("outResultado");

  var quantidade = Number(inQuant.value);
  var anos = Number(inAnos.value);

  if (!(quantidade >= 2) || isNaN(quantidade)) {
    alert("Campo Inválido - Quantidade tem que ser maior ou igual a 2");
    inQuant.focus();
    return;
  }
  if (anos == 0 || isNaN(anos)) {
    alert("Campo Inválido...");
    inAnos.focus();
    return;
  }

  var resultado = "1º Ano: " + quantidade + " Chinchilas\n";
  var multiquant = quantidade

  for (var i = 2; i <= anos; i++) {
    multiquant = multiquant * 3
    resultado = resultado + i + "º Ano: " + multiquant + " Chinchilas\n";
  }

  outResultado.textContent = resultado; 
}
var btPrevisao = document.getElementById("btPrevisao");
btPrevisao.addEventListener("click", mostrarPrevisao);