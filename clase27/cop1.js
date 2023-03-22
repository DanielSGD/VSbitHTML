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

  
  var j = 0;

  $(".boton").click(function () {
    var id = $(this).attr("id");
    var precio = parseInt($("#" + id).data("precio" + id));
    var nombre = $("#" + id).data("producto" + id);
    var cantidad = parseInt($("#cantidad" + id).val());
    var total = precio * cantidad;

    
    localStorage.setItem("nombre" + j, nombre);
    localStorage.setItem("precio" + j, precio);
    localStorage.setItem("cantidad" + j, cantidad);
    localStorage.setItem("total" + j, total);
    j++;
    localStorage.setItem("contador", j);

    $("#alert").text(nombre + " se agrego al carrito");
    $("#mensaje").text(
      "ve a la seccion carrito del menu para seguir con la compra"
    );
    $("#cantidad" + id).val("");
    crear_tabla();
    
  });

  if(parseInt(localStorage.getItem('contador') ) > 0 ){
    crear_tabla();
  }






  function crear_tabla() {
    $("#tabla").empty();
    var pagar = 0;
    j = parseInt(localStorage.getItem("contador"));
    var tabla = $("#tabla");
    var fila;

     for (var i = 0; i < j; i++) {
      fila = $("<tr>").append(
        $("<td>").text(localStorage.getItem("nombre" + i)),
        $("<td>").text(localStorage.getItem("cantidad" + i)),
        $("<td>").text(localStorage.getItem("precio" + i)),
        $("<td>").text(localStorage.getItem("total" + i))
      );
      tabla.append(fila);
      pagar = pagar + parseInt(localStorage.getItem("total" + i));

     
      }

    $("#total_pagar").text(pagar);
  }


});
