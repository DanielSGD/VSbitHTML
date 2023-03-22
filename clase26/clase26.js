var boton = document.getElementById("boton");
var lista = document.getElementById("lista");
var noTarea = document.getElementById("noTarea");
var j = 0;
mostrar()

boton.addEventListener("click", function () {
  var titulo_tarea = document.getElementById("titulo_tarea");
  var descripcion = document.getElementById("descripcion");
  j++;
  localStorage.setItem("titulo" + j, titulo_tarea.value);
  localStorage.setItem("desc" + j, descripcion.value);
localStorage.setItem("contador", j)
    mostrar()
   
});

function mostrar(){
    limpiar_lista()
    //if(j != 0 ){
      j = parseInt( localStorage.getItem("contador"))
  //  }
    for(var i = 0; i <= j ; i++){
        var titu = localStorage.getItem("titulo" + i);
        var des = localStorage.getItem("desc" + i);
        if (titu == "" && des == "") {
          noTarea.innerText = "No hay tareas pendientes";
        } else {
          // crear li
          var li = document.createElement("li");
          li.classList.add("list-group-item");
          li.classList.add("text-start");
      
          li.innerText = titu;
          // crear parrafo p y ingresar descripcion
          var p = document.createElement("p");
          p.innerText = des;
      
          // ingresar  p y botton a li y boton
          li.appendChild(p);
      
          // ingresar li a lista
          lista.appendChild(li);
      
          //resetear tutulo y dreacripcion
          titulo_tarea.value = "";
          descripcion.value = "";
      
         

    }
    
    }
}

function limpiar_lista(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild)
    }
}