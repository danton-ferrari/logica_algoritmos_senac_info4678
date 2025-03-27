function converterDistancia() {
    var distancia = Number(document.getElementById("distancia").value);
    var Km = distancia/1000;
    var Hm = distancia/100;
    var Dam = distancia/10;
    var dm = distancia*10;
    var cm = distancia*100;
    var mm = distancia*1000;
    alert(`A distância de ${distancia}m corresponde a: ${Km}Km, ${Hm}Hm, ${Dam}Dam, ${dm}dm, ${cm}cm, ${mm}mm.`);
}