function calcularDesconto(nomme, sexxo, vallor) {
    var nome = document.getElementById(nomme).value;
    var sexo = document.getElementById(sexxo).value;
    var valor = Number(document.getElementById(vallor).value);
    resultado = sexo == "homem" ? alert(`${nome} você recebeu 5% de desconto, o valor das suas compras sem desconto é de R$${valor.toFixed(2)}, e com desconto fica R$${(valor*0.95).toFixed(2)}`) : alert(`${nome} você recebeu 13% de desconto, o valor das suas compras sem desconto é de R$${valor.toFixed(2)}, e com desconto fica R$${(valor*0.87).toFixed(2)}`);
}