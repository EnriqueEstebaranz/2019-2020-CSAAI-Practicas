console.log("Ejecutando JS...");

/* Constantes de la pantalla*/
  const calculo = document.getElementById('calculo');
  const historial = document.getElementById('historial');


/* Constantes de las teclas*/
  /* Funciones de la Calculadora*/
  const eliminar = document.getElementById('eliminar');
  const clear = document.getElementById('clear');
  const answer = document.getElementById('answer');
  /* Operaciones de la Calculadora*/
  const multiplicacion = document.getElementById('multiplicacion');
  const division = document.getElementById('division');
  const suma = document.getElementById('suma');
  const resta = document.getElementById('resta')
  const exponencial = document.getElementById('exponencial');
  /* Numeros de la Calculadora*/
  const num0 = document.getElementById('num0');
  const num1 = document.getElementById('num1');
  const num2 = document.getElementById('num2');
  const num3 = document.getElementById('num3');
  const num4 = document.getElementById('num4');
  const num5 = document.getElementById('num5');
  const num6 = document.getElementById('num6');
  const num7 = document.getElementById('num7');
  const num8 = document.getElementById('num8');
  const num9 = document.getElementById('num9');
  /* Punto de la Calculadora*/
  const punto = document.getElementById('punto');
  /* Simbolo igual de la Calculadora*/
  const igual = document.getElementById('igual');

  //-- Estados de la calculadora




  suma.onclick = function () {botones("+")};
  resta.onclick = function () {botones("-")};
  multiplicacion.onclick = function () {botones("*")};
  division.onclick = function () {botones("/")};
  punto.onclick = function () {botones(".")};
  exponencial.onclick = function () {botones("e")};
  num0.onclick = function () {botones(0)};
  num1.onclick = function () {botones(1)};
  num2.onclick = function () {botones(2)};
  num3.onclick = function () {botones(3)};
  num4.onclick = function () {botones(4)};
  num5.onclick = function () {botones(5)};
  num6.onclick = function () {botones(6)};
  num7.onclick = function () {botones(7)};
  num8.onclick = function () {botones(8)};
  num9.onclick = function () {botones(9)};
  answer.onclick = function () {anterioresultado()}

/*Instrucciones*/
let numeros = document.getElementsByClassName("numeros");
let operadores = document.getElementsByClassName("operadores");
let operacion = "";
let solucion = 0;
var numerosporlinea = 28;
var n = 0;
const maxlineashistorial = 4;
var LISTA= {
  INIT: 0,
  OP1: 1,
  OPERATION: 2,
  OP2_INIT: 3,
  OP2: 4,
};

let listA= LISTA.INIT;

/*Pulsando el boton clear limpia toda la pantalla y la restablece al valor de inicio*/
clear.onclick = (ev) =>{
  operacion = "";
  solucion = "";
  calculo.innerHTML = "";
  historial.innerHTML = "";
  n = 0;
}

/*Escribe los botones*/
function botones(boton){
  // function sacada de las guias
  for (i=0; i<numeros.length; i++) {
    numeros[i].onclick = (ev) => {
      if ((calculo.innerHTML.length) >= numerosporlinea) {
        console.log("Limite de numeros por pantalla logrado");
        return;
      }else{
        console.log(calculo.innerHTML.length);
        number(ev.target.value);
        console.log(calculo.innerHTML.length);
      }
    }
  }
  for (i=0; i<operadores.length; i++) {
    operadores[i].onclick = (ev) => {
      if ((calculo.innerHTML.length) >= numerosporlinea) {
        console.log("Limite de numeros por pantalla logrado");
        return;
      }else{
        console.log(calculo.innerHTML.length);
        operaciones(ev.target.value);
        console.log(calculo.innerHTML.length);
      }
    }
  }
}

//-- Ha llegado un dígito
function number(num)
{
  //-- Segun el listAhacemos una cosa u otra
  if (listA== LISTA.INIT) {
    calculo.innerHTML = num;
    listA= LISTA.OP1;
  }else if (listA== LISTA.OP1){
    calculo.innerHTML += num;
  } else if (listA== LISTA.OPERATION) {
    calculo.innerHTML += num;
    listA= LISTA.OP2_INIT;
  }else if (listA== LISTA.OP2_INIT) {
    calculo.innerHTML +=  num;
    listA= LISTA.OP2;
  }else if (listA== LISTA.OP2){
    calculo.innerHTML += num;
  }
}

function operaciones(oper){
  if (listA!= LISTA.OPERATION) {
    calculo.innerHTML += oper;
    listA= LISTA.OPERATION;
  }
}

/*Introduce el ultimo resultado obtenido*/
function anterioresultado(){

  ultimasolucion = solucion
    if((solucion.length + calculo.innerHTML.length) > numerosporlinea){ //Basicamente evitamos que se escriba mas de la cuenta.
      console.log("El resultado anterior se saldria de la pantalla")
      return;
    }
    else if (listA.length == 1 && listA[0]==0){
      listA.shift();
    }
  calculo.innerHTML = calculo.innerHTML.concat(ultimasolucion);//Introducimos el anterior valor al array mediante concat

}
/*Elimina el digito mas reciente*/

eliminar.onclick = (ev)=>{
  if((calculo.innerHTML.length) == 0) {
    console.log("Ya se ha borrado todo");
    return;
  }else{
    calculo.innerHTML = calculo.innerHTML.slice(0,-1);
  }
}

/*Calculamos la operacion y la almecenamos en un historial de 4 operaciones*/
igual.onclick = (ev) =>{
  var cadena = [];
  operacion = calculo.innerHTML;
  solucion = Number((eval(operacion)).toFixed(3))// nos permite resultado de hasta 3 digitos
  if(n < maxlineashistorial){
    historial.innerHTML += operacion + " = " + solucion + "<br>";
    cadena[n] = operacion + " = " + solucion + "<br>";
    console.log(listA[n])
    n = n + 1;
  }else{
    for(i = 0; i < maxlineashistorial; i++){
      cadena[i] = listA[i];
    }
    for (i = 0; i < maxlineashistorial-1; i++){
      listA[i] = cadena[1 + i];
    }
    listA[maxlineashistorial - 1] = operacion  + " = " + solucion + "<br>";
    historial.innerHTML = [];
    for (i = 0; i < maxlineashistorial; i++){
      historial.innerHTML += listA[i]
    }
  }
  calculo.innerHTML = ""; //reestablecemos la pantalla y su valor
  operacion = solucion;
}
