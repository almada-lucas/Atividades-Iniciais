function calcularPromocao() {
  var inProduto = document.getElementById("inProduto");
  var inPreco = document.getElementById("inPreco");
  var outPromocao = document.getElementById("outPromocao");
  var out3Produto = document.getElementById("out3Produto");

  var produto = inProduto.value;
  var preco = Number(inPreco.value);

  var produto3 = preco / 2;
  var promocao = preco * 2 + produto3;

  outPromocao.textContent =
    produto + " - Promoção: Leve 3 por R$: " + promocao.toFixed(2);
  out3Produto.textContent = "O 3º produto custa apenas R$: " + produto3.toFixed(2);
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPromocao);
