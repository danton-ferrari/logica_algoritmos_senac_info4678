function converterDolar(id) {
    var real = Number(document.getElementById(id).value);
    alert(`Você tem U${(real/5.76).toFixed(2)}`);
}