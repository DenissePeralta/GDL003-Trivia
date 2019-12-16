//Creando la conexión fetch con el json subido al github
let trivia;
fetch(`https://raw.githubusercontent.com/Laboratoria/GDL003-Trivia/master/src/triviaQuestions.json`)

  .then(function(response) {
    return response.json();
  })
  .then(function(triviaJson) {
  	trivia = triviaJson;  
  });


document.getElementById("pagina2").style.display = "none";
document.getElementById("terrorContainer").style.display = "none";
document.getElementById("resultadosContainer").style.display = "none";

//Esta función es para tomar del input de texto el nombre y devolverlo en una etiqueta span dentro del html. Tambien cambia el string a mayúsculas
function saludar(){
      let valor = document.getElementById("cuadro-texto1").value;
  if (valor.length > 0) {
    document.getElementById("saludo").innerHTML= valor.toUpperCase();
    document.getElementById("pagina1").style.display = "none";
    document.getElementById("pagina2").style.display = "block";
  } else {
    alert("Por favor ingresa un valor en el campo Nombre");
  }
}
//Estas funciones son mostrar las preguntas según la opción seleccionada
function elegirTerror(){
  console.log(trivia);
  document.getElementById("resultadosContainer").style.display = "none";
  document.getElementById("pagina2").style.display = "none";
  document.getElementById("terrorContainer").style.display = "block";
  document.getElementById("preguntasTerror").style.display = "block"; 
}


//Función para hacer refresh a toda la página cuando se aprieta el botón y regresar hasta el inicio -arriba-
function regresarInicio(){
  window.location.reload(true);
}
