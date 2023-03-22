$(document).ready(function(){

    /* $("#link").click(function (e) {
        e.preventDefault()// previene el conportamiento inicial del html
        alert("hiciste click en el link")
        
    //$("#parrafo").text("hola que tal?")
    //$("#parrafo").css("background-color", "blue");
    //$("#parrafo").fadeOut(1500);

    // se puede encandenar chaining 
    $("#parrafo").text("hola que tal?").css("background-color", "blue").fadeOut(1500)


 */

        $("#boton").click( function() {

            var tam = $("#fuente").val()

            $(".texto").css("font-size", tam )

            $(".texto").css("font-family", $("#tipografia").val() )

            $(".texto").css("color", $("#color").val() )

        })

        


    })




















