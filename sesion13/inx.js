//crear un prograsma que muestre en un alert la suma de dos variables 
var num1 = 15;
var num2 = 30;
var total= num1+num2;
//alert('la suma es ' + total);

var txt = "hola como estan ";
var longtxt = txt.length;
//alert(txt  +  longtxt)
var nombre = "daniel "
var apellido = "garzon "
var signo = "capricornio "
var long= nombre.length + apellido.length + signo.length
//alert(nombre + apellido + signo + long)
//mayuscula 
var mascota = "perro"
//alert(mascota.toUpperCase())
var color= "VERDE"
//alert(color.toLowerCase())

var nomComp= nombre + apellido + signo
//alert(nomComp.toUpperCase())
//alert(nomComp.toLowerCase())

//prompt
//var nombreUsuario = prompt("hola ingrese su nombre por favor ");
//alert(nombreUsuario.toUpperCase())

//solicitgar al usuario que ingrese el nombre del color y este se muestre, 'tu color favorito es xxxx'
//var color = prompt("ingrese su color favorito")
//alert("tu color favorito es el " + color.toUpperCase())
//var nUsuario = prompt("por favor ingrese su numero");
//var n1 = 10;
//alert(n1+parseInt(nUsuario));

//pedir al usuario que ingrese 2 numeros por separado y mostar la suma la resta y la multiplicacion

var n1= prompt("por favor ingrese su primer numero")
var n2 = prompt("por favor ingrese el segundo numero")
var l1= parseInt(n1)
var l2= parseInt(n2)
var sum = l1+l2
var resta = l1-l2
var mult= l1*l2
var div= l1/l2
alert("la suma es: " + sum + ", la resta es: " + resta + ", su multiplicacion es: "+ mult + " y la divicion es: " + div)