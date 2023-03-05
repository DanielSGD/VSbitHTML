 //1) El usuario escribe un número y el script imprimirá (console.log) todos los números menores que al 
//dividirlos por 3 den como resto 2.

/* var num= parseInt(prompt("por favor ingrese un numero"));
for(var i = 0; i < num; i++){
    if(i % 3 == 2){
        console.log(i)
    }
}
 */

/*2) El usuario deberá teclear una letra y un número, y el programa mostrará una cadena 
formada por la letra repetida el número que haya tecleado.
Ej: Si el usuario teclea x y 5 el script mostrará xxxxx. O sea una cadena de 5 letras x*/


/* 
var letra = prompt("por favor ingrese una letra");
var numero = parseInt(prompt("por favor ingrese un numero"));
var acomulador = "";
var x = 1;

while(x <= numero){
    acomulador += letra;
    x++
}
 console.log(acomulador);
  */

 /*3) Se le solicita al usuario que teclee 4 números (uno cada vez). Con esos números el programa deberá
  calcular la media aritmética. O sea la suma de los 4 números dividida entre 4*/

/* var n1 = parseInt(prompt("por favor ingrese un  el primer numero"));
var n2 = parseInt(prompt("por favor ingrese un  el segundo numero"));
var n3 = parseInt(prompt("por favor ingrese un  el tercero numero"));
var n4 = parseInt(prompt("por favor ingrese un  el cuarto numero"));
var media = (n1 + n2 + n3 + n4)/4;
console.log(media);
 */

/* 4) Se trata de dibujar un triángulo con asteriscos. El usuario tecleará un valor entero, el programa escribirá 
con asteriscos tantas lineas como diga ese número. 
Cada linea estará formada por una serie de astericos tan larga como diga el número de línea en el que está. */

/* var entero = parseInt(prompt("por favor ingrese un numero entero"));
var acomulador = "";
var i = 1;
for(i ; i <= entero; i++){
    for(var x = 1; x <= i; x++){
    
    acomulador += "*"
    
}

console.log(acomulador)
acomulador = ""
} 
 */
/* 5) Se quiere tener un contador de dos dígitos en base 5. El funcionamiento es simple: el dígito de la derecha 
irá aumentando y cuando pase de 4 su valor se pondrá a 0 y el dígito de la izquierda se incrementa en 1. 
El contador debe deternerse cuando alcancemos el valor 1:4
 */

/* var nu1 = 0;
var nu2 = 0;
var punto = ":"
var contador = "";
var contador2 = "";
for(var i = 0; i <= 5; i++){
    if(nu1 == 0 && nu2 < 5){
      contador = nu1 + punto + nu2;
      nu2++
    }else{
        nu1 = 1;
        nu2 = 0;
        contador = ""
        for(var x = 0; x < 5; x++){
         
            if(nu1 == 1 && nu2 < 5){
                contador2 = nu1 + punto + nu2;
                nu2++ 
        }
        console.log(contador2)
    }
    
    }
    console.log(contador)
    
}  */

// sexto
 
/* var vueltas = parseInt(prompt("por favor ingrese el numero de  vueltas que va a realizar"));
var tiempo = 0;
var contador = 0;
for(var i = 1; i <= vueltas; i++){
    tiempo = parseFloat(prompt("cual es el tiempo de su " + i + " vuelta en unidad de segundos" ))
    contador += tiempo
    console.log("vuelta " + i +  " : " + tiempo + "s")
}
var promedio = contador/vueltas;
console.log("promedio" + ":" + promedio + "s")    
  */