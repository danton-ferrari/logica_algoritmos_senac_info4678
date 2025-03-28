function calcularTempoVida(id1, id2) {
    var qtdeCigarrosDia = Number(document.getElementById(id1).value);
    var qtdeAnosFumando = Number(document.getElementById(id2).value);
    var diasPerdidos = (qtdeCigarrosDia*10) * (qtdeAnosFumando*365);
    alert(`Um fumante que fuma ${qtdeCigarrosDia} cigarros por dia e fuma hà ${qtdeAnosFumando} anos, terá sua vida reduzida em ${Math.round(diasPerdidos/1440)} dias.`)
}