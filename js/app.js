'use strict';

//Saludo.
let nombre = prompt("¿Cómo te llamas?");
alert("Hola, " + nombre + " bienvenido a este pequeño lugar acerca de mi");


// Respuestas:
const respuestarugby = "si";
const respuestaPatricia = "no";
const respuestaItaliana = "si";
const respuestaRomantic = "si";
const respuestaCantar = "no";


//Preguntas:
const question1 = prompt("Me gusta el rugby?");
if (respuestarugby.toLowerCase() === question1.toLowerCase()) { 
    alert("Muy Bien");
    console.log(" Muy Bien")
} else {
    alert("Respuesta Incorrecta");
    console.log("Respuesta Incorrecta")
}

const question2 = prompt("¿El nombre de mi gata es Patricia?");
if (respuestaPatricia.toLowerCase() === question2.toLowerCase()) { 
    alert("Muy Bien");
    console.log(" Muy Bien")
} else {
    alert("Respuesta Incorrrecta");
    console.log("Respuesta Incorrecta")
}

const question3 = prompt("¿Me gusta la comida italiana?");
if (respuestaItaliana.toLowerCase() === question3.toLowerCase()) { 
    alert("Muy Bien");
    console.log(" Muy Bien")
} else {
    alert("Respuesta Incorrrecta");
    console.log("Respuesta Incorrecta")
}

const question4 = prompt("¿Me gustan las peliculas románticas?");
if (respuestaRomantic.toLowerCase() === question4.toLowerCase()) { 
    alert("Muy Bien");
    console.log(" Muy Bien")
} else {
    alert("Respuesta Incorrrecta");
    console.log("Respuesta Incorrecta")
}

const question5 = prompt("¿Me gusta cantar?");
if (respuestaCantar.toLowerCase() === question5.toLowerCase()) { 
    alert("Muy Bien");
    console.log(" Muy Bien")
} else {
    alert("Respuesta Incorrrecta");
    console.log("Respuesta Incorrecta")
}