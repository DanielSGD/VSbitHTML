//segun un numero ingresado por el usuario, mostrar la suma de todos los numeros hasta dicho numero, en un console log
//con el for
/* var num = parseInt(prompt("por favor ingrese un numero"));
var i;
var suma = 0;
for (i = 0; i <= num; i++) {
  suma = suma + i;
}
console.log("la suma del for es " + suma);

// con el while 
var x = 0;
var sum = 0;
while (x <= num) {
  sum = sum + x;
  x++;
}
console.log("la suma del while es " + sum);

// con el do while 
var y = 0;
var sum2 = 0;
do {
  sum2 = sum2 + y;
  y++;
} while (y <= num);
console.log("la suma del do while es " + sum2);
 */
//Según un texto ingresado por el usario, determinar cuántas letras a (mayúsculas o minúsculas) existen.

/* var texto = prompt("por favor ingrese un texto");
var nimTexto = texto.toLowerCase();
var contTexto= nimTexto.length;
var i ;
var contador = 0;
for(i = 0; i <= contTexto ; i++){
    if(nimTexto.slice(i,i+1) === "a"){
        contador++
    }
}
console.log(contador)
 */
//ejercicio 2

/*  var texto1 = prompt("por favor ingrese un texto");
var contTex1 =  texto1.length;
var inverText = "";
for(contTex1; contTex1>=0; contTex1--){
    inverText= inverText + texto1.slice(contTex1-1, contTex1)
} 
console.log(inverText)
 */

 

/*Según un texto ingresado por el usuario, cambiar las:
 - a por 4
 - e por 3
 - i por 1
- o por 0*/
/* var texto2 = prompt("por favor ingrese un texto");
var mtex = texto2.toLowerCase();
var conTxt = mtex.length;
var nuevoTxt = "";
var rempTxt = "";
var w = 0;
var sli;
while (w <= conTxt) {
  sli = mtex.slice(w, w + 1);
  switch (sli) {
    case "a":
      rempTxt = "4";

      break;
    case "e":
      rempTxt = "3";
      break;
    case "i":
      rempTxt = "1";
      break;
    case "o":
      rempTxt = "0";
      break;
    default:
      rempTxt = mtex.slice(w, w + 1);
  }
  nuevoTxt = nuevoTxt + rempTxt;
  w++;
}
console.log(nuevoTxt);
 */