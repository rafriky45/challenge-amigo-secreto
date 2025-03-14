let amigos = []
//capturar el valor del campo de entrada
function agregarAmigo() {
    let ingresarAmigo = document.getElementById("amigo");
    let amigo = ingresarAmigo.value;

    if(!amigo) {
        alert("por favor inserte un nombre");
        return;
    }
}