$(document).ready(function () {
var lista_nombres = [];
var i = 0;

$("#guardar").click( function (){
    var nombres = $("#nombre").val();
    lista_nombres[i] = nombres;
    localStorage.setItem("nombres", JSON.stringify(lista_nombres) )
    i++;
    $("#nombre").val("")

})

$("#mostrar").click(function (){
    $("#lista").empty();
    var array = JSON.parse( localStorage.getItem("nombres"))
    for(var j = 0; j < array.length; j++)
    var lista = $("#lista").append(
        $("<li>").addClass("list-group-item").text(array[j])
    )


})


})