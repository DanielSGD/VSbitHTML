//servidor creado con node puro
/* const http = require("http");

const fs = require("fs");
// creamos servidor http que maneje las peticiones del cliente y les devuelva una respuesta
http
  .createServer(function (req, res) {
    console.log("gracias se comunico con el SERVIOR");

// creando la cabecera/head de la respuesta
    res.writeHead(200, {
      "Content-Type": "text/html",
      "Access-Control-Allow-Origin": "*"
    });

    // accdede al alchivo que uiero enviar al client

    let leerArchivo = fs.createReadStream(__dirname + "/index.html");

    leerArchivo.pipe(res);
  })
  .listen(3000, function () {
    console.log("servidor escuchando el puerto 3000");
  });
 */

//servidor creado con express

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// configuramos el body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// creamos la url con el metodo get, = http://localhost:3000/ejemplo
app.get("/ejemplo", function (req, res) {
  //la respuesta al cliente
  console.log("el cliente ingreso por get a http://localhost:3000/ejemplo");
  res.sendFile(__dirname + "/index.html");
});

app.get("/registro", function (req, res) {
  res.sendFile(__dirname + "/registro.html");
});
app.get("/login", function (req, res) {
  res.sendFile(__dirname + "/login.html");
});

app.get("/calculadora", function (rep, res) {
  res.sendFile(__dirname + "/calculadora.html");
});

//ruta para mandar la peticion del formulario post

app.post("/formulario_login", function (req, res) {
  console.log(req.body);

  res.send("gracias por completar el formuario");
});

app.post("/formulario_calculadora", function (req, res) {
  console.log("primer numero: " + req.body.numero1);
  console.log("segundo numero: " + req.body.numero2);
  console.log("operador: " + req.body.operador);
  let resultado = operacion(
    req.body.numero1,
    req.body.numero2,
    req.body.operador
  );
  console.log("total: " + resultado);
  res.send("el resultado es " + resultado);
});

app.listen(3000, function () {
  console.log("servidor listo y preparado en el puerto 3000");
});

function operacion(n1, n2, operador) {
  var total;
  switch (operador) {
    case "sumar":
      total = n1 + n2;
      break;
    case "restar":
      total = n1 - n2;
      break;
    case "restar":
      total = n1 - n2;
      break;
    case "multiplicar":
      total = n1 * n2;
      break;
    case "dividir":
      if (n2 == 0) {
        total = "no se puede dividir por 0";
      } else {
        var total = n1 / n2;
      }

      break;
    default:
      total = "eligio una opcion erronea";
      break;
  }

  return total;
}
