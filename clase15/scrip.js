/*
var edad = parseInt(prompt("ingrese su edad "));

if(edad>= 18){
    alert("eres mayor de edad");
}else{
    alert("aun eres menor de edad");
}*/
// crear un algiritmo que le pida al usuario que le ingrese un mes,
// puede ser en numeros o letras, si el mes es febrero poner el mes tiene 28 dias si no
// el mes tiene mas de 28 dias

/*var mes = prompt("por favor ingresar un mes");

if(mes=="febrero" || mes=="2"){
    alert("el mes tiene 28 dias ");
}else{
    alert("el mes tiene mas de 28 dias");
}
*/

// solicitar al usuario 2 numeros y mostar un mensaje que indique si el primer numero es divisible por el segundo

/*var n1= parseInt(prompt("por favor ingresar el primer numero "));
var n2= parseInt(prompt("por favor ingresar el segundo  numero "));

if(n2==0){
alert("no es posible realizar esta operacion")
}else if(n1 % n2 == 0){
    alert("si es divisible")
}else{
    alert("no es divisible")
}*/

//Solicitar al usuario que ingrese un color, según este, mostrar un mensaje que diga si el mismo es un color primario o no

var color = prompt("por favor ingrese un color");

if ((color == "rojo" ) || (color == "azul") || (color == "amarillo")) {
  alert(color + " es un color primario");
} else {
  alert(color + " no es un color primario");
}

//Crear un programa que determine si un número introducido es divisible por 11 y 5

var num = parseInt(prompt("por favor ingrese un numero"));

if ((num % 11 == 0) && (num % 5 == 0)) {
  alert(num + " es divisible por 11 y 5");
} else {
  alert(num + " no es divisible por 11 y 5");
}

//Crear un programa que determine si el número ingresado es PAR o NO. (12 es par si ---> 12 % 2 = 0)
var numero = parseInt(prompt("por favor ingrese un numero"));
if (numero == 0) {
  alert(numero + " no es par ");
} else if (numero % 2 == 0) {
  alert(numero + " es un numero par");
} else {
  alert(numero + " no es par");
}
