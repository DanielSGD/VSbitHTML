//daniel steven garzon diaz

/* 1) Crear un programa donde el usuario ingrese en un prompt la temperatura en grados Celcius y el 
programa muestre en una alert la temperatura en grados Fahrenheit.
 */
/* var gradosC = parseFloat(prompt("por favor ingrese la temperatura en grados celsiuos"));
var gradosF = (gradosC*1.8) + 32;
alert("el resultado de la convercion de " + gradosC + "Celsius" + " a grados Fahrenheit da " + gradosF + "F")
 */
/* 2) El usuario ingresa un número, se pide crear la siguiente pirámide (console.log) hasta dicho número ingresado
Ej: numero ingresado = 5

*
**
***
****
*****
****
***
**
* */

/* var entero = parseInt(prompt("por favor ingrese un numero entero"));
var acomulador = "";
var i = 1;
var invAcomulador = "";
for(i ; i <= entero; i++){
    for(var x = 1; x <= i; x++){
    
    acomulador += "*"
    
}
console.log(acomulador)
acomulador = ""

} 
for(var y = (entero - 1) ; y >0; y--){
    for(var x = 1; x <= y; x++){
    
    invAcomulador += "*"
    
}
console.log(invAcomulador)
invAcomulador = ""
} */

/* 3) Según un numero ingresado por el usuario, calcular su factorial */
/* var numero = parseInt(prompt("por favor ingrese un numero"));
var factorial = 1;
for(var i = 1; i <= numero; i++){
factorial = factorial*i;
}
console.log("el factorial de " + numero + " es " + factorial); */

/* 
4) ATM (cajero automático) */
/* var dinero = 1000000;
var opciones = parseInt(
  prompt(
    "por favor elija una de ls siguientes opciones" +
      "\n\n" +
      "1 EXTRAER" +
      "\n" +
      "2 DEPOSITAR" +
      "\n" +
      "3 CONSULTAR SALDO" +
      "\n" +
      "4 VER ÚLTIMOS MOVIMIENTOS" +
      "\n" +
      "5 SALIR"
  )
);
var extraer = 0;
var depositar = 0;
for (var i = opciones; i <= 5; i++) {
  
  if (opciones > 5 || opciones < 1) {
    alert("ingreso una opcion erronea, por favor vuelva a elegir");
    opciones = parseInt(
      prompt(
        "por favor elija una de ls siguientes opciones" +
          "\n\n" +
          "1 EXTRAER" +
          "\n" +
          "2 DEPOSITAR" +
          "\n" +
          "3 CONSULTAR SALDO" +
          "\n" +
          "4 VER ÚLTIMOS MOVIMIENTOS" +
          "\n" +
          "5 SALIR"
      )
    );
  } else if (opciones == 1) {
    extraer = parseInt(prompt("por favor ingrese el monto a extraer"));
    if (extraer > dinero) {
      alert("el valor a retirar supera el monto en la cuenta");
      opciones = parseInt(
        prompt(
          "por favor elija una de ls siguientes opciones" +
            "\n\n" +
            "1 EXTRAER" +
            "\n" +
            "2 DEPOSITAR" +
            "\n" +
            "3 CONSULTAR SALDO" +
            "\n" +
            "4 VER ÚLTIMOS MOVIMIENTOS" +
            "\n" +
            "5 SALIR"
        )
      );
    } else {
      dinero = dinero - extraer;
      alert("transaccion exitosa, por favor recoja su dinero");
      opciones = parseInt(
        prompt(
          "por favor elija una de ls siguientes opciones" +
            "\n\n" +
            "1 EXTRAER" +
            "\n" +
            "2 DEPOSITAR" +
            "\n" +
            "3 CONSULTAR SALDO" +
            "\n" +
            "4 VER ÚLTIMOS MOVIMIENTOS" +
            "\n" +
            "5 SALIR"
        )
      );
    }
  } else if (opciones == 2) {
    depositar = parseInt(prompt("por favor ingrese el monto a depositar"));
    dinero = dinero + depositar;
    
    opciones = parseInt(
        prompt(
          "por favor elija una de ls siguientes opciones" +
            "\n\n" +
            "1 EXTRAER" +
            "\n" +
            "2 DEPOSITAR" +
            "\n" +
            "3 CONSULTAR SALDO" +
            "\n" +
            "4 VER ÚLTIMOS MOVIMIENTOS" +
            "\n" +
            "5 SALIR"
        )
      );
  } else if(opciones == 3){
    alert(" si saldo es " + dinero)
    opciones = parseInt(
        prompt(
          "por favor elija una de ls siguientes opciones" +
            "\n\n" +
            "1 EXTRAER" +
            "\n" +
            "2 DEPOSITAR" +
            "\n" +
            "3 CONSULTAR SALDO" +
            "\n" +
            "4 VER ÚLTIMOS MOVIMIENTOS" +
            "\n" +
            "5 SALIR"
        )
      )
  }else if(opciones == 4){
     alert("sus ultimos moviminetos son" + "\n\n"
     + "a extraido " + extraer + "\n"
     + "a depositado " + depositar + "\n"
     + "su saldo es " + dinero  
     )
     opciones = parseInt(
        prompt(
          "por favor elija una de ls siguientes opciones" +
            "\n\n" +
            "1 EXTRAER" +
            "\n" +
            "2 DEPOSITAR" +
            "\n" +
            "3 CONSULTAR SALDO" +
            "\n" +
            "4 VER ÚLTIMOS MOVIMIENTOS" +
            "\n" +
            "5 SALIR"
        )
      )
  }else if(opciones == 5){
    alert("muchas gracias por preferirnos")
  }
}
 */
/* 5) Fibonacci

Según un número ingresado por el usuario, mostrar la secuencia de Fibonacci hasta esa cantidad de veces.
Ej: el usuario ingresa el 8, mostrar:
0 1 1 2 3 5 8 13 21 34 */

/* var n = parseInt(prompt("Ingrese un número"));

var a = 0;
var b = 1;

console.log("la secuencia Fibonacci de " + n + " es " +  "\n" + a + "\n"+  b);
var c
for (var i = 1; i <= n; i++) {
  c = a + b;
  console.log(c);
  a = b;
  b = c;
} */