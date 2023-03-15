function convertirArray(a) {
  var convArray = [];
  var x = 0;
  var caracter;
  for (var i = 0; i < a.length; i++) {
    caracter = a[i];
    if (caracter !== " ") {
      convArray[x] = caracter;
      x++;
    }
  }
  console.log(convArray);
  return convArray;
}
var menus;
var texto;
var txtArray;
var InvTxt = [];
var x = 0;
var decicion = true;
while (decicion == true) {
  menus = parseInt(
    prompt(
      "por favor elija una de las siguientes opciones\n\n 1 ingresar texto\n 2 salir"
    )
  );
  switch (menus) {
    case 1:
      texto = prompt("por favor ingrese un texto").toLowerCase();
      txtArray = convertirArray(texto);

      for (var i = txtArray.length - 1; i >= 0; i--) {
        InvTxt[x] = txtArray[i];
        x++;
      }
      console.log(InvTxt);
      var decicion = false;
      for (var j = 0; j < txtArray.length; j++) {
        if (txtArray[j] == InvTxt[j]) {
          decicion = true;
        } else {
          decicion = false;
          break;
        }
      }

      if (decicion == true) {
        alert("es un palindromo");
      } else {
        alert("no  es un palindromo");
      }
      break;
    case 2:
      decicion = false;
      break;
  }
  txtArray=[];
}
