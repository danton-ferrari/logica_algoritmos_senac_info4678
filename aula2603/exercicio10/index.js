function calcularMetrosQuadrados(id1, id2) {
    var altura = Number(document.getElementById(id1).value);
    var largura = Number(document.getElementById(id2).value);
    var metrosQuadrados = altura * largura;
    alert(`Você precisará de ${Math.ceil(metrosQuadrados)} latas de tinta.`);
}