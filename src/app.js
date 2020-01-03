//Creando la conexión fetch con el json subido al github
let trivia;
fetch(`https://raw.githubusercontent.com/DenissePeralta/GDL003-Trivia/master/src/triviaQuestions.json`)
  .then(function(response) {
    return response.json();
  })
  .then(function(triviaJson) {
  	trivia = triviaJson;  
  });

//Elementos ocultos al inicio 
document.getElementById("pagina2").style.display = "none";
document.getElementById("triviasContainer").style.display = "none";
document.getElementById("resultadosContainer").style.display = "none";

//Esta función es para tomar del input de texto el nombre y devolverlo en una etiqueta span dentro del html. Tambien cambia el string a mayúsculas
function saludar(){
      let inputValue = document.getElementById("cuadro-texto1").value;
  if (inputValue.length > 0 && inputValue !== " ") {
    document.getElementById("saludo").innerHTML= inputValue.toUpperCase();
    document.getElementById("pagina1").style.display = "none";
    document.getElementById("pagina2").style.display = "block";
  } else {
    alert("Por favor ingresa un valor en el campo Nombre");
  }
};

//Esta función son mostrar las primeras preguntas según la opción/categoría seleccionada
let currentIndexQuestion = 0;

const selectCategory = (value) => {
  temporizador(15);
  let questionContainer = document.getElementById("questionContainer");
  let opt1 = document.getElementById("opcion1");
  let opt2 = document.getElementById("opcion2");
  let opt3 = document.getElementById("opcion3");
  document.getElementById("pagina2").style.display = "none";
  document.getElementById("triviasContainer").style.display = "block";
    if (value === "terror") {
      questionContainer.innerHTML = (currentIndexQuestion + 1) + ". " + trivia.terror[0].question;
      opt1.innerHTML = " " + trivia.terror[0].option1;
      opt2.innerHTML = " " + trivia.terror[0].option2;
      opt3.innerHTML = " " + trivia.terror[0].option3;
    } else if (value === "infantil") {
      questionContainer.innerHTML = (currentIndexQuestion + 1) + ". " + trivia.infantil[0].question;
      opt1.innerHTML = " " + trivia.infantil[0].option1;
      opt2.innerHTML = " " + trivia.infantil[0].option2;
      opt3.innerHTML = " " + trivia.infantil[0].option3;
    } else {
      questionContainer.innerHTML = (currentIndexQuestion + 1) + ". " + trivia.romantica[0].question;
      opt1.innerHTML = " " + trivia.romantica[0].option1;
      opt2.innerHTML = " " + trivia.romantica[0].option2;
      opt3.innerHTML = " " + trivia.romantica[0].option3;
    }
}

//Esta función es iniciar el temporizador en 15 segundos y mostrarlo en la pantalla
let contador;

const temporizador = (segundos) => {
  const ahora = Date.now();
  const despues = ahora + segundos * 1000;
  mostrarTiempo(segundos);

  contador = setInterval(() => {
    const segundosRestantes = Math.round((despues - Date.now()) / 1000);
    if (segundosRestantes < 0) {
      clearInterval(contador);
      return;
    }
    mostrarTiempo(segundosRestantes);
  }, 1000);
}
const mostrarTiempo = (segundos) => {
  document.getElementById("temporizador").innerHTML = `${0}${0}:${segundos < 10? "0" : ""}${segundos}`;
}

//Función para mostrar la siguiente pregunta
const cargaSigPregunta = () => {
  let opcionSeleccionada = document.querySelector('input[name="opcion"]:checked');
  let indice = opcionSeleccionada.value;
  console.log(opcionSeleccionada);
  console.log(indice);
  
  
  if (!opcionSeleccionada) {
    alert("Por favor selecciona una opción")
  }
}

//Función para hacer refresh a toda la página cuando se aprieta el botón y regresar hasta el inicio -arriba-
function regresarInicio(){
  window.location.reload(true);
};
