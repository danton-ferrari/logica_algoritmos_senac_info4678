function calcularIdade(id) {
    var idade = 2025 - Number(document.getElementById(id).value);
    resultado = idade >= 18 ? alert(`Sua idade é ${idade}, pode voltar!`) : alert(`Sua idade é ${idade}, não pode voltar!`);
}