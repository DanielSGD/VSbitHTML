/* ejercicio 1
segun un numero ingresado por el usuario, ir solicitando ir solicitando valores(texto o numero) y guardalos en un array  */
/* var num = parseInt(prompt("por favor ingrese un numero"));
var array=[];
var valores;
for(var i = 0; i <num; i++){
    valores = prompt("por favor ingrese un valor (numero o letras)");
    array[i] = valores;

}
console.log(array) */

//ejercicio 2

/* var array1 = [];


for(var i = 0; i < 5; i++){
    array1[i] =  parseInt(prompt("por favor ingrese un numero"));

}
var min = array1[0];
for(i = 0; i < 5; i++){
    if(array1[i] < min){
        min = array1[i];

    
    }
}
console.log(min) */

//ejercicio 2
/* var cuantos = parseInt(prompt("cuantos valores desea ingresar"));
var valores = [];
for(var i = 1; i <= cuantos; i++){
    valores[i] = parseInt(prompt("ingrese el " + i + "valor"));
}
var pregunta = parseInt(prompt("qué valor se desea averiguar si existe"));

for(var j = 0; j <= valores.length; j++ ){
    if(pregunta == valores[j]){
        alert("el valor " + pregunta + " se encuentra entre los valores originales")
        break;
    }else if(j == valores.length && pregunta != valores[j] ){
        alert("el valor " + pregunta + " no se encuentra en los valores originales")
    }
    
}

 */
// tercer ejercicio
/* 
var cantidad = parseInt(prompt("cuantos valores desea ingresar"));
var frutas = [];
for (var i = 0; i < cantidad; i++) {
  frutas[i] = prompt(
    "por favor ingrese una de estas frutas" + "\n" + "manzana, naranja, pera"
  ).toLowerCase();
}
console.log(frutas)
var contManzanas = 0,
  contNaranja = 0,
  contPera = 0,
  incorrecto = 0;
for (var j = 0; j < frutas.length; j++) {
  switch (frutas[j]) {
    case "manzana":
      contManzanas++;

      break;
    case "naranja":
      contNaranja++;

      break;
    case "pera":
      contPera++;
      break;
    default:                                                                                       
      incorrecto++;
      break;
  }
}
alert(
  "la cantidad de manzanas es " +
    contManzanas +
    "\n" +
    "de naranja es " +
    contNaranja +
    "\n" +
    " de pera es " +
    contPera +
    "\n" +
    "la cantidad de valores incorrectos es " +
    incorrecto
); */
/* 
EJERCICIO: Playlist

Estas son las opciones:
- Crear una playlist, teniendo en cuenta que debe grabarse con un nombre
- Agregar temas a la playlist (todos los que quiera)
- Buscar temas en una playlist
- Mostrar los datos de la playlist (nombre y listado de temas) */

var menu = parseInt(
  prompt(
    "por favor elija una de las siguientes opciones \n \n" +
      "1 crear una playlist  \n" +
      "2 Agregar temas a la playlist \n" +
      "3 Buscar temas en una playlist \n" +
      "4 Mostrar los datos de la playlist \n" +
      "5 salir"
  )
);
var nombre,
  cuantos,
  temas = [],
  buscar;

for (var i = 0; i <= menu; i++) {
  if (menu == 5) {
    alert("gracias por su preferencia, hasta pronto");
    break;
  } else {
    switch (menu) {
      case 1:
        nombre = prompt("por favor ingrese el nombre de su playlist");
        break;
      case 2:
        cuantos = parseInt(prompt("cuantos temas quiere ingresar"));
        for (var j = 0; j < cuantos; j++) {
          temas[j] = prompt("ingrese el " + (j + 1) + " tema");
        }
        break;
      case 3:
        buscar = prompt("cual tema deseas buscar");
        for (var x = 0; x <= temas.length; x++) {
          if (buscar == temas[x]) {
            alert(
              "el tema " + buscar + " se encuentra en la playlist " + nombre
            );
            break;
          } else if (x == temas.length && buscar != temas[x]) {
            alert(
              "el tema " + buscar + " no se encuentra en la playlist " + nombre
            );
          }
        }
        break;
      case 4:
        alert(
          "la playlist se llama " +
            nombre +
            "\n" +
            "contiene los " +
            temas.length +
            " sigientes temas \n" +
            temas
        );
        break;

      default:
        alert("por favor escoja una opcion valida ");
        menu = parseInt(
          prompt(
            "por fvor elija una de las siguientes opciones \n \n" +
              "1 crear una playlist (solo puede crear una) \n" +
              "2 Agregar temas a la playlist \n" +
              "3 Buscar temas en una playlist \n" +
              "4 Mostrar los datos de la playlist \n" +
              "5 salir"
          )
        );

        break;
    }
  }
  var menu = parseInt(
    prompt(
      "por fvor elija una de las siguientes opciones \n \n" +
        "1 crear una playlist (solo puede crear una) \n" +
        "2 Agregar temas a la playlist \n" +
        "3 Buscar temas en una playlist \n" +
        "4 Mostrar los datos de la playlist \n" +
        "5 salir"
    )
  );
}
