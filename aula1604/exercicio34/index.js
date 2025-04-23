function imc() {
    var [altura, peso] = [Number(document.getElementById("altura").value).toFixed(2), Number(document.getElementById("peso").value).toFixed(2)];
    var IMC = (peso/(altura**2)).toFixed(1);
    if (IMC < 18.5) {
        alert("Abaixo do peso!")
    }
    else if (IMC >= 18.5 && IMC < 25) {
        alert("Peso ideal!")
    }
    else if (IMC >= 25 && IMC < 30) {
        alert("Sobrepeso!")
    }
    else {
        alert("Obesidade!")
    }
}