function triangulo(id1, id2, id3) {
    var [a, b, c] = [Number(document.getElementById(id1).value), Number(document.getElementById(id2).value), Number(document.getElementById(id3).value)];
    resultado = ((a+b) > c) && ((a+c) > b) && ((b+c) > reta1) ? alert("É possível formar um triângulo!") : alert("Não é possível formar um triângulo!");
}