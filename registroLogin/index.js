const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var nombres = [];
var apellidos = [];
var emails = [];
var contracenas = [];
var cont = 0;
// configuramos el body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// ruta para home
app.get("/home", function(rep, res){
    //respuesta clinete
    console.log("el cliente ingreso por get a http://localhost:4000/home");
    res.sendFile(__dirname + "/index.html");
})
// ruta para registro
app.get("/registro", function(rep, res){
    //respuesta clinete
    console.log("el cliente ingreso por get a http://localhost:4000/registro");
    res.sendFile(__dirname + "/registro.html");
})

// ruta para login
app.get("/login", function(rep, res){
    //respuesta clinete
    console.log("el cliente ingreso por get a http://localhost:4000/login");
    res.sendFile(__dirname + "/login.html");
})

app.post("/fomulario_registro", function (req, res){
    nombres[cont] = req.body.nombre;
    apellidos[cont]=req.body.apellido;
    emails[cont] = req.body.email;
    contracenas[cont] = req.body.contrasena;
    cont ++;
    res.send("el registro se a completado, dirijase a login para iniciar sesion");
    console.log(nombres, apellidos, emails, contracenas)
})

app.post("/formulario_login", function (req, res){
    let mensaje;
    let email= req.body.email2;
    let contra= req.body.contrasena2;
    let i = 0;
    let decicion = true
   while(i < nombres.length && decicion == true ){
        if(email == emails[i] && contra == contracenas[i]){
            decicion == false
           mensaje = ("bienvenido " + nombres[i] + " " + apellidos[i])
        }else{
           decicion == true 
           mensaje = "el email o la contraceña estan erroneos"
           i++
        }
        
   }

    res.send(mensaje);
   

    
})




app.listen(4000, function () {
    console.log("servidor listo y preparado en el puerto 4000");
  });
  

