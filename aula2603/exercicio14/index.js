function calcularAluguel(id1, id2) {
    var Km = Number(document.getElementById(id1).value);
    var dias = Number(document.getElementById(id2).value);
    var valorAluguel = (0.20*Km) + (90*dias);
    alert(`O valor do aluguel é R$${(valorAluguel).toFixed(2)}`)
}