let amigo = []
//capturar el valor del campo de entrada
function agregarAmigo() {
    let ingresarAmigo = document.getElementById("amigo");
    let amigos = ingresarAmigo.value
//validando entrada
    if(!amigos) {
        alert("por favor inserte un nombre");
        return;
    }
    //actualizando el array de amigos
    amigo.push(amigos);
    //limpiar el campo de entrada
    ingresarAmigo.value = "";
    ingresarAmigo.focus();

    listaDeAmigos();
    
}

function listaDeAmigos() {
    //obtener el elmento de la lista
    let listaAmigos = document.getElementById("listaAmigos");
    //limpiar lista exiztente
    listaAmigos.innerHTML = "";

    //iterar sobre el arreglo
    for (let i = 0; i < amigo.length; i++) {
        let lista = document.createElement("li");
        //agregar elementos a la lista
        lista.textContent = amigo[i];
        listaAmigos.appendChild(lista);
    }

    
}




