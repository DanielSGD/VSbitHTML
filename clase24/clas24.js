// event listener

/* var btn = document.getElementById("boton");

//crear un escuchador de eventos para el boton
//el navegador vaa quedar escuchando constante mente cuando el usuario haga clic en el boton
btn.addEventListener("mouseover", function(){
    alert("hola mundo")
}) */

/* var boton = document.getElementById("activar");

boton.addEventListener("click", function () {
  var myNumber = document.getElementById("myNumber").value;
  var resultado = document.getElementById("resultado");
  console.log("el numero es" + myNumber);
  var x = myNumber % 2;
  if (x == 0) {
    resultado.innerText = myNumber + " es PAR";
  } else {
    resultado.innerText = myNumber + " es INPAR";
  }
});

var texto = document.getElementById("texto");
var tx1 = document.getElementById("tx1");
var tx2 = document.getElementById("tx2");
var tx3 = document.getElementById("tx3");
var tx4 = document.getElementById("tx4");
var tx5 = document.getElementById("tx5");

texto.addEventListener("input", function () {
  var interno = texto.value;
  tx1.innerText = interno;
  tx2.innerText = interno.toUpperCase();
  tx3.innerText = interno.toLowerCase();
  tx4.innerText = interno;
  tx4.style.fontStyle = "italic";
  tx5.innerText = convertirArray(interno);

});
function convertirArray(a) {
    var convArray = [];
    var x = 0;
    var invArray = [];
    var texto = "";
    for (var i = 0; i < a.length; i++) {
        convArray[i] = a[i];  
      }
    console.log(convArray);

    for(var j = (convArray.length) - 1; j >= 0; j--){
        invArray[x] = convArray[j]
        x++
    }
    console.log(invArray);
    for(var y = 0; y < invArray.length; y++){
        texto = texto + invArray[y]
    }
    console.log(texto)
    return texto;
  
}
convertirArray("hola a todos") */

//calculadora
/* 
var suma = document.getElementById("suma");
var resta = document.getElementById("resta");
var divicion = document.getElementById("divicion");
var multiplicacion = document.getElementById("multiplicacion");
var resultado = document.getElementById("resultado");
var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");

function sum(n1,n2){
  var x = parseInt( n1.value)
  var y = parseInt( n2.value)
  var s = x+y
  return s;
}
function res(n1,n2){
  var x = parseInt( n1.value)
  var y = parseInt( n2.value)
  var r = x-y
  return r;
}
function div(n1,n2){
  var x = parseInt( n1.value)
  var y = parseInt( n2.value)
  if(y != 0){
    var d = x/y

  }else{
    var d = "no se puede dividir en 0"
  }
  
  return d;
}
function mul(n1,n2){
  var x = parseInt( n1.value)
  var y = parseInt( n2.value)
  var m = x*y
  return m;
}
suma.addEventListener("click", function(){
  var operacion = sum(n1, n2) 
  console.log(operacion)
  
  resultado.innerText = operacion
  
})

resta.addEventListener("click", function(){
  var operacion = res(n1, n2) 
  console.log(operacion)
  
  resultado.innerText = operacion
  
})
divicion.addEventListener("click", function(){
  var operacion = div(n1, n2) 
  console.log(operacion)
  
  resultado.innerText = operacion
  
})
multiplicacion.addEventListener("click", function(){
  var operacion = mul(n1, n2) 
  console.log(operacion)
  
  resultado.innerText = operacion
  
})

 */

// factura

var tabla_productos = document.getElementById("tabla_productos");
var boton_producto = document.getElementById("boton_producto");
var miTabla = "";

boton_producto.addEventListener("click", function () {
  //  fila y  celdas
  var nuevaFila = document.createElement("tr");
  var celda1 = document.createElement("td");
  var celda2 = document.createElement("td");
  var celda3 = document.createElement("td");

  // crear input
  var nuevoInput1 = document.createElement("input");
  var nuevoInput2 = document.createElement("input");
  var nuevoInput3 = document.createElement("input");
  // dar clases, placeholder y tipo
  nuevoInput1.type = "text";
  nuevoInput1.placeholder = "nombre producto";
  nuevoInput1.classList.add("nomProducto");

  nuevoInput2.type = "number";
  nuevoInput2.placeholder = "cantidad";
  nuevoInput2.classList.add("cantProducto");

  nuevoInput3.type = "number";
  nuevoInput3.placeholder = "precio";
  nuevoInput3.classList.add("precProducto");

  // inputs a las celdas
  celda1.appendChild(nuevoInput1);
  celda2.appendChild(nuevoInput2);
  celda3.appendChild(nuevoInput3);

  // celdas a la fila
  nuevaFila.appendChild(celda1);
  nuevaFila.appendChild(celda2);
  nuevaFila.appendChild(celda3);
  // fila a la tabla
  tabla_productos.appendChild(nuevaFila);

  /* miTabla = miTabla + "<tbody><tr><td><input class='nomProducto ' type='text' placeholder='nombre producto'></td><td> <input class='cantProducto' type='number' placeholder='cantidad'></td><td><input class='precProducto' type='number' placeholder='precio'></td></tr></tbody>";
  tabla_productos.innerHTML = miTabla; */
});
var boton_factura = document.getElementById("boton_factura");
var titulo_factura = document.getElementById("titulo_factura");
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var email = document.getElementById("email");
var fecha = document.getElementById("fecha");
var tabla_info = document.getElementById("tabla_info");
var tabla_factura = document.getElementById("tabla_factura");
var tabla_titulo =
  " <tr><th scope='col' >nombre</th> <th scope='col'>apellido</th><th scope='col'>email</th><th scope='col'>fecha</th></tr>";
var tex_tabla;

boton_factura.addEventListener("click", function () {
  titulo_factura.className = "text-bg-dark p-3"
  titulo_factura.innerText = "Factura";
  tex_tabla =
    "<tr>" +
    "<td>" +
    nombre.value +
    "</td><td>" +
    apellido.value +
    "</td><td>" +
    email.value +
    "</td><td>" +
    fecha.value +
    "</td></tr>";
  tabla_info.innerHTML = tabla_titulo + tex_tabla;
  var nomProducto = document.getElementsByClassName("nomProducto");
  var cantProducto = document.getElementsByClassName("cantProducto");
  var precProducto = document.getElementsByClassName("precProducto");
  var nuevaFil;
  var celd1;
  var celd2;
  var celd3;
  var celd4;
  var precio_total;
  var total_pagar = 0;

  // crear encabezado 
  var encabezado = document.createElement("tr");
   var cel1 = document.createElement("th");
   var cel2 = document.createElement("th");
   var cel3 = document.createElement("th");
   var cel4 = document.createElement("th");
   // texto del encabezado
   cel1.innerText = "nombre producto"
   cel2.innerText = "cantidad"
   cel3.innerText = "precio"
   cel4.innerText = "precio total"
   // celdas a fila
   encabezado.appendChild(cel1);
   encabezado.appendChild(cel2);
   encabezado.appendChild(cel3);
   encabezado.appendChild(cel4);
  // fila a tabla
  tabla_factura.appendChild(encabezado);
  for(var i = 0; i < nomProducto.length; i++){
    // crear fila y 4 columnas
   nuevaFil = document.createElement("tr");
   celd1 = document.createElement("td");
   celd2 = document.createElement("td");
   celd3 = document.createElement("td");
   celd4 = document.createElement("td");
  
    // ingresar datos a las columnas
   celd1.innerText = nomProducto[i].value;
   celd2.innerText = cantProducto[i].value;
   celd3.innerText = precProducto[i].value;
   precio_total = cantProducto[i].value * precProducto[i].value  
   celd4.innerText = precio_total
   total_pagar = total_pagar + precio_total
   

  // agregar las filas a las columnas 
  nuevaFil.appendChild(celd1);
  nuevaFil.appendChild(celd2);
  nuevaFil.appendChild(celd3);
  nuevaFil.appendChild(celd4);
  
   // fila a la tabla
   tabla_factura.appendChild(nuevaFil);
  }
 
  resultado = document.getElementById("resultado")
  resultado.className = "text-bg-secondary p-3"
  resultado.innerText = "el total a pagar es " + total_pagar

});
