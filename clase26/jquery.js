$(document).ready(function(){
    // todo lo que hagamos en JQUERY va dentro de esto
    $("#dato")//seleccionar por id en query
    $(".btn")// seleccionar por class 
    $("#dato").val("hola como estan"); // me da lo que el usuario coloco el el imput como el antiguo value


    // evento - el antiguo, addevenenlistener

    $(".btn").click(function(){
        alert("holasaa")
    })
    var num1 = $("#n1") 
    var num2 = $("#n2")
  
    $("#suma").click(function () {
        
        var sum = suma(num1,num2);
        $("#resultado").text("el resultado es de la suma es " + sum).css("color","blue")
    })
    
    $("#resta").click(function () {
        
       var rest = resta(num1,num2);
        $("#resultado").text("el resultado es de la resta es" + rest).css("color","red")
    })
    $("#multiplicacion").click(function () {  
        var multi = multiplicacion(num1,num2);
        $("#resultado").text("el resultado es de la multiplicacion  es " + multi).css("color","black")
    })
    $("#divicion").click(function () {
        var divic = divicion(num1,num2);
        $("#resultado").text("el resultado es de la divicion  es " + divic).css("color","violet")
    })


})

function suma(a, b){
    var x = parseInt(a.val())
    var y = parseInt(b.val())
    var total = x + y 
    return total;

}
function resta(a, b){
    var x = parseInt(a.val())
    var y = parseInt(b.val())
    var total = x - y 
    return total;

}
function multiplicacion(a, b){
    var x = parseInt(a.val())
    var y = parseInt(b.val())
    var total = x * y 
    return total;

}
function divicion(a, b){
    var x = parseInt(a.val())
    var y = parseInt(b.val())
    var total
    if(y == 0){
        alert("no se puede dividir por 0")
        total = "no se puede dividir por 0" 
    return total;
    }else{
     total = x / y 
    return total;
}
}
