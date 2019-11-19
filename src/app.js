document.getElementById("pagina2").style.display = "none";
document.getElementById("terrorContainer").style.display = "none";
document.getElementById("infantilContainer").style.display = "none";
document.getElementById("resultadosContainer").style.display = "none";

//Esta función es para tomar del input de texto el nombre y devolverlo en una etiqueta span dentro del html. Tambien cambia el string a mayúsculas
function saludar(){
      let valor = document.getElementById("cuadro-texto1").value;
  if (valor.length >= 1) {
    document.getElementById("saludo").innerHTML= valor.toUpperCase();
    document.getElementById("pagina1").style.display = "none";
    document.getElementById("pagina2").style.display = "block";
  }
}
function elegirTerror(){
  document.getElementById("resultadosContainer").style.display = "none";
  document.getElementById("pagina2").style.display = "none";
  document.getElementById("finBoton").style.display = "none";
  document.getElementById("sigBoton2").style.display = "none";
  document.getElementById("pregunta2").style.display = "none";
  document.getElementById("pregunta3").style.display = "none";
  document.getElementById("sigBoton").style.display = "block";
  document.getElementById("terrorContainer").style.display = "block";
  document.getElementById("pregunta1").style.display = "block"; 
}
function elegirInfantil(){
  document.getElementById("resultadosContainer").style.display = "none";
  document.getElementById("pagina2").style.display = "none";
  document.getElementById("finBoton2").style.display = "none";
  document.getElementById("sigBoton4").style.display = "none";
  document.getElementById("pregunta5").style.display = "none";
  document.getElementById("pregunta6").style.display = "none";
  document.getElementById("sigBoton3").style.display = "block";
  document.getElementById("infantilContainer").style.display = "block";
  document.getElementById("pregunta4").style.display = "block";
}
function cargaSigPregunta(){
  /*if (document.querySelector("#:checked").lenght){  
  }*/
  document.getElementById("finBoton").style.display = "none";
  document.getElementById("sigBoton").style.display = "none";
  document.getElementById("pregunta1").style.display = "none";
  document.getElementById("pregunta3").style.display = "none";
  document.getElementById("sigBoton2").style.display = "block";
  document.getElementById("terrorContainer").style.display = "block";
  document.getElementById("pregunta2").style.display = "block";
}
function cargaSigPregunta2(){
  document.getElementById("finBoton").style.display = "block";
  document.getElementById("sigBoton").style.display = "none";
  document.getElementById("sigBoton2").style.display = "none";
  document.getElementById("pregunta1").style.display = "none";
  document.getElementById("pregunta2").style.display = "none";
  document.getElementById("terrorContainer").style.display = "block";
  document.getElementById("pregunta3").style.display = "block";
}
function cargaSigPregunta3(){
  document.getElementById("finBoton2").style.display = "none";
  document.getElementById("sigBoton3").style.display = "none";
  document.getElementById("pregunta4").style.display = "none";
  document.getElementById("pregunta6").style.display = "none";
  document.getElementById("sigBoton4").style.display = "block";
  document.getElementById("infantilContainer").style.display = "block";
  document.getElementById("pregunta5").style.display = "block";
}
function cargaSigPregunta4(){
  document.getElementById("finBoton2").style.display = "block";
  document.getElementById("sigBoton3").style.display = "none";
  document.getElementById("sigBoton4").style.display = "none";
  document.getElementById("pregunta4").style.display = "none";
  document.getElementById("pregunta5").style.display = "none";
  document.getElementById("infantilContainer").style.display = "block";
  document.getElementById("pregunta6").style.display = "block";
}

let resultado = 0;
//Función para contar las respuestas correctas e incorrectas de la trivia A (películas de terror)
function cargaResultados(){
	let opcionElegida = document.querySelector('input[name="opcion1"]:checked');
  if(opcionElegida.value == "Jeepers creepers (El demonio)"){
     resultado ++;
  }
  let opcionElegida2 = document.querySelector('input[name="opcion2"]:checked');
  if(opcionElegida2.value == "El Proyecto de la Bruja de Blair"){
    resultado ++;
  }
  let opcionElegida3 = document.querySelector('input[name="opcion3"]:checked');
  if(opcionElegida3.value == "El conjuro"){
    resultado ++;
  }
  let resultadoInc = 3 - resultado;
  let valor2 = document.getElementById("cuadro-texto1").value;
  if (resultado == 0){
  document.getElementById("resultado1").innerHTML= "Ups, no le atinaste a ninguna " + valor2.toUpperCase() + ". Tuviste " + resultado + " respuestas correctas y " + resultadoInc + " respuestas incorrectas";
  } else if (resultado == 1){
    document.getElementById("resultado1").innerHTML= "Ok " + valor2.toUpperCase() + ", al parecer necesitas ver más pelis. Tuviste " + resultado + " respuesta correcta y " + resultadoInc + " respuestas incorrectas";
  } else if (resultado == 2){
    document.getElementById("resultado1").innerHTML= "No estuvo tan mal " + valor2.toUpperCase() + ". Tuviste " + resultado + " respuestas correctas y " + resultadoInc + " respuesta incorrecta";
  } else {
    document.getElementById("resultado1").innerHTML= "Super bien " + valor2.toUpperCase() + ", sabes mucho sobre el tema!!. Tuviste " + resultado + " respuestas correctas y " + resultadoInc + " respuestas incorrectas";
  }
  
  document.getElementById("resultado2").innerHTML= "Volver a jugar"
  document.getElementById("terrorContainer").style.display = "none";
  document.getElementById("resultadosContainer").style.display = "block";
  resultado = 0;
}

//Función para contar las respuestas correctas e incorrectas de la trivia B (películas infantiles)
function cargaResultados2(){
	let opcionElegida4 = document.querySelector('input[name="opcion4"]:checked');
  if(opcionElegida4.value == "Up: Una aventura de altura"){
     resultado ++;
  }
  let opcionElegida5 = document.querySelector('input[name="opcion5"]:checked');
  if(opcionElegida5.value == "Intensamente"){
    resultado ++;
  }
  let opcionElegida6 = document.querySelector('input[name="opcion6"]:checked');
  if(opcionElegida6.value == "Hércules"){
    resultado ++;
  }
  let resultadoInc = 3 - resultado;
  let valor2 = document.getElementById("cuadro-texto1").value;
  if (resultado == 0){
  document.getElementById("resultado1").innerHTML= "Ups, no le atinaste a ninguna " + valor2.toUpperCase() + ". Tuviste " + resultado + " respuestas correctas y " + resultadoInc + " respuestas incorrectas";
  } else if (resultado == 1){
    document.getElementById("resultado1").innerHTML= "Ok " + valor2.toUpperCase() + ", al parecer necesitas ver más pelis. Tuviste " + resultado + " respuesta correcta y " + resultadoInc + " respuestas incorrectas";
  } else if (resultado == 2){
    document.getElementById("resultado1").innerHTML= "No estuvo tan mal " + valor2.toUpperCase() + ". Tuviste " + resultado + " respuestas correctas y " + resultadoInc + " respuesta incorrecta";
  } else {
    document.getElementById("resultado1").innerHTML= "Super bien " + valor2.toUpperCase() + ", sabes mucho sobre el tema!!. Tuviste " + resultado + " respuestas correctas y " + resultadoInc + " respuestas incorrectas";
  }
  
  document.getElementById("resultado2").innerHTML= "Volver a jugar"
  document.getElementById("infantilContainer").style.display = "none";
  document.getElementById("resultadosContainer").style.display = "block";
  resultado = 0;
}
//Función para hacer refresh a toda la página cuando se aprieta el botón y regresar hasta el inicio -arriba-
function regresarInicio(){
  window.location.reload(true);
}