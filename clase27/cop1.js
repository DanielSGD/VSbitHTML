$(document).ready(function () {
  $("body").css("font-family", "Verdana").css("background-color", "#ebebeb");
  $("h1").addClass("shadow p-3 mb-5 bg-body-tertiary rounded fw-semibold");
  $("h3").addClass("fw-semibold");
  $("h4").addClass("fw-semibold");
  $("h5").addClass("fw-semibold");

  $("#segundo").hide();
  $("#tercero").hide();
  $("#cuarto").hide();

  $("#producto").click(function () {
    $("#primero").hide();
    $("#tercero").hide();
    $("#cuarto").hide();

    $("#segundo").show();
  });

  $("#ecomerce").click(function () {
    $("#segundo").hide();
    $("#tercero").hide();
    $("#cuarto").hide();

    $("#primero").show();
  });

  $("#carrito").click(function () {
    $("#segundo").hide();
    $("#primero").hide();
    $("#cuarto").hide();

    $("#tercero").show();
  });

  $("#nosotros").click(function () {
    $("#segundo").hide();
    $("#primero").hide();
    $("#tercero").hide();

    $("#cuarto").show();
  });

  var pagar = 0;
  var j = 0;

  $(".boton").click(function () {
    var id = $(this).attr("id");
    var precio = parseInt($("#" + id).data("precio" + id));
    var nombre = $("#" + id).data("producto" + id);
    var cantidad = parseInt($("#cantidad" + id).val());
    var total = precio * cantidad;

    j++;
    localStorage.setItem("nombre" + j, nombre);
    localStorage.setItem("precio" + j, precio);
    localStorage.setItem("cantidad" + j, cantidad);
    localStorage.setItem("total" + j, total);
    localStorage.setItem("contador", j);

    $("#alert").text(nombre + " se agrego al carrito");
    $("#mensaje").text(
      "ve a la seccion carrito del menu para seguir con la compra"
    );
    $("#cantidad" + id).val("");
    console.log(localStorage.getItem("nombre"));
    crear_tabla();
  });

  function crear_tabla() {
    /* var nom = localStorage.getItem("nombre").split(",")
        var prec = localStorage.getItem("precio").split(",")
        var cant = localStorage.getItem("cantidad").split(",")
        var totl = localStorage.getItem("total").split(",") */
        borrar_tabla()
    j = parseInt(localStorage.getItem("contador"));
    var tabla = $("#tabla");
    var fila;

    
/*     for (var i = 1; i <= j; i++) {
      fila = $("<tr>").append(
        $("<td>").text(localStorage.getItem("nombre" + i)),
        $("<td>").text(localStorage.getItem("cantidad" + i)),
        $("<td>").text(localStorage.getItem("precio" + i)),
        $("<td>").text(localStorage.getItem("total" + i))
      );
      tabla.append(fila);
      pagar = pagar + parseInt(localStorage.getItem("total" + i));

      /* var ultimaFila = tabla.find("tr:last");
            ultimaFila.append("<td>" + nom[i] + "</td>");
            ultimaFila.append("<td>" + cant[i] + "</td>");
            ultimaFila.append("<td>" + prec[i] + "</td>");
            ultimaFila.append("<td>" + totl[i] + "</td>");
      }
            */
    
    $("#total_pagar").text(pagar);
  }

  function borrar_tabla(){
console.log("borrando tabla")
    while($("#tabla").firstChild){
      $("#tabla").removeChild($("#tabla").lastChild)
    }
  }


});
