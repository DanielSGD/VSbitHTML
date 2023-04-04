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
  $("#tabla_historial").hide();
  var j = 0;

  $(".boton").click(function () {
    var id = $(this).attr("id");
    var precio = parseInt($("#" + id).data("precio" + id));
    var nombre = $("#" + id).data("producto" + id);
    if (parseInt($("#cantidad" + id).val()) < 1) {
      var cantidad = 1;
      var total = precio * cantidad;
    } else {
      var cantidad = parseInt($("#cantidad" + id).val());
      var total = precio * cantidad;
    }

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
    if (parseInt(localStorage.getItem("contador")) >= 0) {
      $("#noProductos").hide();
      $("#tabla_total").show();
      $("#boton_comprar").show();
    } else {
      $("#noProductos").show();
      $("#tabla_total").hide();
      $("#boton_comprar").hide();
    }

    crear_tabla();
  });

  console.log("prueva carrito" + localStorage.getItem("contador"));
  if (parseInt(localStorage.getItem("contador")) >= 0) {
    $("#noProductos").hide();
    $("#tabla_total").show();
    $("#boton_comprar").show();
  } else {
    $("#noProductos").show();
    $("#tabla_total").hide();
    $("#boton_comprar").hide();
  }

  if (parseInt(localStorage.getItem("contador")) > 0) {
    crear_tabla();
  }

  $("#boton_comprar").click(function () {
    j = parseInt(localStorage.getItem("contador"));
    for (var i = 0; i < j; i++) {
      var fNombre = localStorage.getItem("nombre" + i);
      localStorage.setItem("fNombre" + i, fNombre);
      localStorage.removeItem("nombre" + i);
      var fCantidad = localStorage.getItem("cantidad" + i);
      localStorage.setItem("fCantidad" + i, fCantidad);
      localStorage.removeItem("cantidad" + i);
      var fPrecio = localStorage.getItem("precio" + i);
      localStorage.setItem("fPrecio" + i, fPrecio);
      localStorage.removeItem("precio" + i);
      var fTotal = localStorage.getItem("total" + i);
      localStorage.setItem("fTotal" + i, fTotal);
      localStorage.removeItem("total" + i);
    } 
    var fContador = localStorage.getItem("contador");
    localStorage.setItem("fContador", fContador);
    localStorage.removeItem("contador");
    j = 0;

    $("#noProductos").show();
    $("#mensaje1").text("compra realizada");
    $("#mensaje2").text("dirijase a la seccion producto para seguir comprando");
    $("#tabla_total").hide();
    $("#boton_comprar").hide();
  });

  $("#boton_historial").click(function () {
    $("#tabla_historial").show();

    

    crear_tablaHistorial();
  });

  function crear_tablaHistorial() {
    //$("#Ctabla").empty();
    var pagar = 0;
    j = parseInt(localStorage.getItem("fContador"));
    var tabla = $("#Ctabla");
    var fila;

    for (var i = 0; i < j; i++) {
      fila = $("<tr>").append(
        $("<td>").text(localStorage.getItem("fNombre" + i)),
        $("<td>").text(localStorage.getItem("fCantidad" + i)),
        $("<td>").text(localStorage.getItem("fPrecio" + i)),
        $("<td>").text(localStorage.getItem("fTotal" + i))
      );
      tabla.append(fila);
      pagar = pagar + parseInt(localStorage.getItem("fTotal" + i));
    }

    $("#totalHistorial").text(pagar);
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

  console.log($(".elemento"));
  var producto = $(".elemento");
  console.log("contidad de productos " + producto.length);
  console.log("el data " + producto.data("tipo"));

  var filtro = $("#eleccion");

  filtro.on("change", function () {
    var tipo_seleccionado = filtro.val();

    if (tipo_seleccionado != "todos") {
      producto.hide();
      $("." + tipo_seleccionado).show();
    } else {
      producto.show();
    }
  });
});
