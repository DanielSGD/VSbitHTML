$(document).ready( function(){


})


/* var num = 10;
(num > 10) ? alert("es mayor a 10"): alert("es menor o igual a 10") */

/* var n = parseInt(prompt("ingrese un numero"))
alert((n % 2 == 0)?"es par" : "no es par" )
 */
var n = parseInt(prompt("por favor elija  una de las siguientes opciones \n1 hola \n2 como estas \n3 chau"))
alert((n == 1)? "hola" :(n == 2)? "como estas?":(n == 3)? "chau": "opcion incorrecta" )