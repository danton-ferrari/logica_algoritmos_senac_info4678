function calcularDesconto(id) {
    var preco = Number(document.getElementById(id).value);
    alert(`O valor com desconto promocional de 5% de deconto é R$${(preco*0.95).toFixed(2)}`);
}