function calcularDelta(a, b, c) {
    var a = Number(document.getElementById(a).value);
    var b = Number(document.getElementById(b).value);
    var c = Number(document.getElementById(c).value);
    var resultado = (b**2)-(4*a*c);
    alert(`O resultado é: ${resultado}`);
}