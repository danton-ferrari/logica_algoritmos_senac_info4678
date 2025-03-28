function aumento(id) {
    var aumento = Number(document.getElementById(id).value);
    alert(`O seu aumento de 15% é R$${(aumento*1.15).toFixed(2)}`);
}