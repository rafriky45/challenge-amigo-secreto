let amigos = []
//capturar el valor del campo de entrada
function agregarAmigo() {
    let ingresarAmigo = document.getElementById("amigo");
    let amigo = ingresarAmigo.value;
//validando entrada
    if(amigo == false) {
        alert("por favor inserte un nombre");
        return;
    }
    //actualizando el array de amigos
    amigos.push(amigo);
    //limpiar el campo de entrada
    ingresarAmigo.value = "";
    
}

function listaAmigos() {
    //obtener el elmento de la lista
    let listaAmigos =document.getElementById("listaAmigos");
    


}


