var imgAtual = "Arvore.jpg"
var imgAnterior = "meioambiente.png"

function trocar() {
    document.getElementById("figura").src = imgAtual;
    let aux = imgAtual;
    imgAtual = imgAnterior;
    imgAnterior = aux;
}