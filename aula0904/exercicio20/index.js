function parImpar() {
    var numero = Number(document.getElementById('numero').value);
    resultado = numero%2==0 ? alert(`O numero ${numero} é par.`) : alert(`O numero ${numero} não é par.`);
}