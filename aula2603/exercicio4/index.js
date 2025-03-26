function somar(id1, id2) {
    var numero1 = Number(document.getElementById(id1).value);
    var numero2 = Number(document.getElementById(id2).value);
    var resultado = numero1 + numero2;
    alert(`A soma entre ${numero1} e ${numero2} é igual a ${resultado}.`);
}