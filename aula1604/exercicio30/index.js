function triangulo(id1, id2, id3) {
    var [a, b, c] = [Number(document.getElementById(id1).value), Number(document.getElementById(id2).value), Number(document.getElementById(id3).value)];
    resultado = ((a+b) > c) && ((a+c) > b) && ((b+c) > a) ? alert("É possível formar um triângulo!") : alert("Não é possível formar um triângulo!");
    if ( a == b && a == c) {
        alert("É um triângulo EQUILÁTERO!");
    } else if (a == b | a == c | c == b) {
        alert("É um ISÓSCELES!");
    } else { alert("É um ESCALENO!"); }
}