/* //DOM = Document Object Model
//acceso al nodo o a los elementos

// identificacion por etiqueta
var parrafos = document.getElementsByTagName("p");
for(var i = 0; i< parrafos.length; i++){
    //console.log(parrafos[i].innerText)// obtengo el texto interior de cda parrafo
    //console.log(parrafos[i].innerHtml)// obtengo el html interior de cada parrafo
}

// identificacion por la propiedad name
var a = document.getElementsByName("parrafo1");
console.log('muesta las cosas por la propiedad name')
console.log(a[0].innerText)

// identificar mediante el id
var b = document.getElementById("boton");
console.log('mostrando el elemento por id')
console.log(b.innerText)
//mediante la clase 
var c = document.getElementsByClassName("saludo")
console.log("mostrando por clases ")
for(var j = 0; j < c.length; j++){
    console.log(c[j].innerText);
    console.log(c[j].value)
} 
console.log('mostrando el value ' + c[1].value) 
// cuando algien de click en el boton mostrar un saludo con el nombre del usuario que previamente ingreso el el imput 
function mostrar_mensaje(){
    var x = document.getElementById("input").value;
alert("bienvenido " + x)
}

 */
var enlace  = document.getElementById("link")
console.log(enlace.href)
console.log(enlace.style.color)
console.log(enlace.className)

console.log(enlace.getAttribute("style"))

//crear una etiqueta, clocarle un id, en base a ese id, desde js agregarle los siguientes atributos;
/*clase = miclase
-color de letra verde
- texto interno : hola estamos hackeando la matrix
*/
var a = document.getElementById("buton")
a.setAttribute("class", "miClase")
a.style.color="blue"
a.innerText="hola estamos hackeando la matrix"
/*
cuando el usuari haga click en el boton "mostrar " debera mostrar un console log 
 los dato sque ingreso en los input, nombre apellido edad 
*/
function aviso(){
    var nom = document.getElementById("nombre").value;
    var apell = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value
    alert("nombre: " + nom + "\n" + "apellido: "  + apell + "\n" + "edad: " + edad )
}