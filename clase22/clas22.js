/* var a = 10;
var b = 5;

function suma(x,b){
    var total = x + b
    console.log(total)
    b++; 
}
suma(a,b)
console.log("b =" + b ) */

//ejercicio uno

var parametro = prompt("por favor ingrese un texto");

var menu = parseInt(
  prompt("como desea que se comvierta el texto\n\n 1 minuscula\n 2 mayuscula")
);
function minuscula(parametro) {
  var a = parametro.toLowerCase();
  
  return a;
}
function mayuscula(parametro) {
  var a = parametro.toUpperCase();
  console.log(a);
  return a;
}
function mostar(a) {
  console.log(a);
  return a;
}
var a;
switch (menu) {
  case 1: //nimuscula
  console.log("estew es el parametro " + parametro)
    a = minuscula(parametro);
    mostar(a);
    break;
  case 2: //mayuscula
    a = mayuscula(parametro);
    mostar(a);
    break;
  default:
    alert("elija una opcion correcta ");
   
    break;
}
