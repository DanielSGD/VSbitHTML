var decicion = parseInt(
  prompt(
    "por favor ingrese una de las siguientes opciones \n 1-suma \n 2-resta \n 3-multiplicacion \n 4-divicion"
  )
);
if ((decicion > 4) || (decicion <= 0)) {
  alert("eligio una opcion erronea");
} else {
  var n1 = parseFloat(prompt("ingrese el primer numero"));
  var n2 = parseFloat(prompt("ingrese el segundo numero"));

  switch (decicion) {
    case 1:
      alert("el resultado de la suma es " + (n1 + n2));
      break;
    case 2:
      alert("el resultado de la resta es " + (n1 - n2));
      break;
    case 3:
      alert("el resultado de la multiplicacion es " + (n1 * n2) );
      break;
    case 4:
      if (n2 == 0) {
        alert("no se puede dividir por 0");
      } else {
        alert("el resultado de la divicion es " + (n1 / n2) );
      }
      break;
  }
}
