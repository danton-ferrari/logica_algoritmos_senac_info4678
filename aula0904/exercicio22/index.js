function alistamento() {
    var idade = 2025 - Number(document.getElementById("idade").value);
    resultado = idade >= 18 ? alert(`Passou ${idade-18} anos desdo o alistamento`) : alert(`Falta ${18-idade} anos até o alistamento`) ;
}