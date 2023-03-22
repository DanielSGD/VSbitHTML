var nombre = document.getElementById("nombre")
var apellido = document.getElementById("apellido")
var direccion = document.getElementById("direccion")
var telefono = document.getElementById("telefono")
var serie = document.getElementById("serie")

var botonGuardar = document.getElementById("guardar")
var BotonRecuperar = document.getElementById("recuperar")

var nombreGuardado = document.getElementById("nombreGuardado")
var apellidoGuardado = document.getElementById("apellidoGuardado")
var direc = document.getElementById("direccionGuardado")
var tel = document.getElementById("telefonoGuardado")
var ser = document.getElementById("serieGuardado")


botonGuardar.addEventListener("click", function(){
    localStorage.setItem("nombre",nombre.value)
    localStorage.setItem("apellido",apellido.value)
    localStorage.setItem("direccion",direccion.value)
    localStorage.setItem("telefono",telefono.value)
    localStorage.setItem("serie",serie.value)
  
})

BotonRecuperar.addEventListener("click", function(){
   nombreGuardado.innerText = "Nombre: " +  localStorage.getItem("nombre");
   apellidoGuardado.innerText ="Apellido: " +  localStorage.getItem("apellido");
   direc.innerText = "Direccion: " + localStorage.getItem("direccion");
   tel.innerText = "telefono: " + localStorage.getItem("telefono");
   ser.innerText = "serie favorita: " + localStorage.getItem("serie")
  
})
