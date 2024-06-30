let numeroSecreto 
let intentos 
let listaNumeroSortado = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto){

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto
    return;
}

function verificarIntento(){

    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto)
        {
                asignarTextoElemento('p',`Acertaste el número es ${intentos} ${(intentos === 1) ?'vez' : 'veces'}`)
        
                document.getElementById('reiniciar').removeAttribute('disabled')
            }
        else{
            if(numeroDeUsuario > numeroSecreto){
                 asignarTextoElemento("p","El número secreto es menor");
            }
            else{
                asignarTextoElemento("p","El número secreto es mayor");

            } 
            intentos++;
            limpiarCaja();
        }
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado)
    console.log(listaNumeroSortado)
    if (listaNumeroSortado.length == numeroMaximo) {
      asignarTextoElemento('p','Ya se sortearon todos los números')  
    }else{ 
    if (listaNumeroSortado.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }
    else{
        listaNumeroSortado.push(numeroGenerado)
        return numeroGenerado;
    }}
}
function condicionInicial(){
asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`); 
    
    //generar el número
    numeroSecreto = generarNumeroSecreto()    
    //inciales intento
    intentos = 1

}
function limpiarCaja(){
    let = valorCaja =document.querySelector(`#valorUsuario`)
    valorCaja.value = '';
}
function reiniciarJuego(){
    //limpipar caja
    limpiarCaja();
    //indicar mensaje
    condicionInicial()
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionInicial();

