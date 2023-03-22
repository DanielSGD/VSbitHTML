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
  $(".boton").click(function () {
    var id = $(this).attr("id");
    var precio = parseInt($("#" + id).data("precio" + id));
    var nombre = $("#" + id).data("producto" + id);
    var cantidad = parseInt($("#cantidad" + id).val());
    var total = precio * cantidad;

    $("#alert").text(nombre + " se agrego al carrito");
    $("#mensaje").text(
      "ve a la seccion carrito del menu para seguir con la compra"
    );
    var tabla = $("#tabla");
    tabla.append("<tr></tr>");
    var ultimaFila = tabla.find("tr:last");
    ultimaFila.append("<td>" + nombre + "</td>");
    ultimaFila.append("<td>" + cantidad + "</td>");
    ultimaFila.append("<td>" + precio + "</td>");
    ultimaFila.append("<td>" + total + "</td>");
    pagar = pagar + total;
    $("#total_pagar").text(pagar);
  });
   
  console.log($("#b1").data("producto1"));
});
