function somar() {
    var nota1 = Number(document.getElementById("nota1").value);
    var nota2 = Number(document.getElementById("nota2").value);
    var media = (nota1 + nota2) / 2;
    alert(`A média entre ${nota1} e ${nota2} é igual a ${media}`);
}