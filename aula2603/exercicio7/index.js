function dobroTerca() {
    var numero = Number(document.getElementById("numero").value);
    alert(`O dobro de ${numero} é ${numero*2}. A terça parte de ${numero} é ${(numero/3).toFixed(2)} `);
}