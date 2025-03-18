// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

// funcion para obtener el valor del input
function agregarAmigo(){
    let campoDeEntrada = document.getElementById('amigo').value;   

    //verifica que el campo no este vacio
if(campoDeEntrada !== ""){
    listaAmigos.push(campoDeEntrada);
    listaDeAmigos(); // Actualizar la lista en el HTML
}else{
    alert("error");
}//limpia el campo
document.getElementById("amigo").value = "";  
}

//funcion para agregara a los amigos a la lista
function listaDeAmigos(){
let lista = document.getElementById("listaAmigos");

//limpia la lista
lista.innerHTML = "";

for(i=0; i < listaAmigos.length; i++){
    let li = document.createElement("li");//traemos la <li> a js
    li.innerHTML = listaAmigos[i]; //se añaden los amigos a la lista
    lista.appendChild(li); //se añaden las <li> a el <ul>
}
}


//funcion para seleccionar un nombe aleatoriamente
function sortearAmigo(){
    if( listaAmigos == ""){
        alert("error, ingrese nombres");
    }else{
        let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length );
        let nombreEscogido = listaAmigos[indiceAleatorio];

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = nombreEscogido ;
    }
}