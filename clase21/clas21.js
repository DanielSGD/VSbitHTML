function bienvenida() {
  var nombre = prompt("por favor ingerse su nombre");
  alert("bienvenido " + nombre);
}

/* }
bienvenida()
var y = true;
var numero;
while(y == true){
  numero = parseInt(prompt("por favor ingrese un numero"))
  if(numero < 10){
    bienvenida()
  }else{
    y=false
  }

} */

/* function suma(a, b) {
    var c = a+b
    alert(c)
}

for(var i=1; i<=3; i++){
    n1 = parseInt(prompt("por favor ingrese un numero"))
    n2 = parseInt(prompt("por favor ingrese otro numero"))
    
    suma(n1,n2)
} */
var y = true;
var n1, n2;
var decicion;
function suma(n1, n2){
  alert("el resultado de la suma es " + (n1 + n2));
}
function resta(n1,n2){
  alert("el resultado de la resta es " + (n1 - n2))
}
function multiplicacion(n1,n2){
  alert("el resultado de la multiplicacion es " + (n1 * n2));
}
function divicion(n1,n2){
  if (n2 == 0) {
    alert("no se puede dividir por 0");
  } else {
    alert("el resultado de la divicion es " + n1 / n2);
  }
}


while (y == true) {
  decicion = parseInt(
    prompt(
      "por favor ingrese una de las siguientes opciones \n 1-suma \n 2-resta \n 3-multiplicacion \n 4-divicion \n 5 salir"
    )
  );
  if(decicion == 5){
    alert("que vuelva, hasta pronto")
        y = false
  }else{

  
     n1 = parseFloat(prompt("ingrese el primer numero"));
     n2 = parseFloat(prompt("ingrese el segundo numero"));

    switch (decicion) {
      case 1:
        suma(n1,n2);
        break;
      case 2:
        resta(n1,n2);
        break;
      case 3:
        multiplicacion(n1,n2);
        break;
      case 4:
        divicion(n1,n2);
        break;
      default:
        alert ("por favor elija una opcion correcta")
        break;

    }
  }
}
