'use strict';

let score = 0;
function bienvenida() {
    let user = prompt("Hola! ¿Cuál es tu nombre?");
    alert("Hola "+user+"\n ¡Juguemos algo! Te haré 7 preguntas sobre mí y vemos si aciertas 🤪")  
};

function preguntas() {
    alert("Recuerda que para responder debes escribir y/n");
    function pregunta1(){
        let pregunta_1 = prompt("¿Me gusta el rugby?(Y/N)");
        if (pregunta_1.toUpperCase() === "Y") {
            console.log("Acertaste! me encanta ver los mundiales de rugby 😬");
            alert("CORRECTO!!!\n Acertaste! me encanta ver los mundiales de rugby 😬");
            score++;
        } else {
            alert("###ERROR###\n Me encanta aunque no pueda jugarlo 😬");
        }
    }

    function pregunta2(){
        let pregunta_2 = prompt("¿El nombre de mi gata es Patricia? (Y/N)");
        if (pregunta_2.toUpperCase() === "Y") {
            console.log("No! Tengo dos Cleo y Luna 🐱");
            alert("###ERROR###\n No! Tengo dos Cleo y Luna 🐱");
        } else {
            console.log("Tengo dos pero son Cleo y Luna 🐱 ");
            alert("CORRECTO!!!\n Tengo dos pero son Cleo y Luna 🐱");
            score++;
        }
    }      

    function pregunta3(){
        let pregunta_3 = prompt("¿Me gusta la comida italiana? (Y/N)");
        if (pregunta_3.toUpperCase() === "Y") {
            console.log("CORRECTO!!!...  Amo todo! Pizzas, lasagna, pastas, etc 💗");
            alert("CORRECTO!!!\n Amo todo! Pizzas, lasagna, pastas, etc 💗");
            score++;
        } else {
            console.log("###ERROR###!...  Me encanta, es más Amo casi todos los platos 💗");
            alert("###ERROR###\n Me encanta, es más Amo casi todos los platos 💗");
        }
    }

    function pregunta4 () {
        let pregunta_4 = prompt("¿Me gustan las peliculas románticas? (Y/N)");
        if (pregunta_4.toUpperCase() === "Y") {
            console.log("CORRECTO!!!...Soy toda una romántica ");
            alert("CORRECTO!!!\nSoy toda una romántica");
            score++;
        } else {
            console.log("###ERROR###... Me encantan sobre todo si tienen finales inesperados.");
            alert("###ERROR###\nMe encantan sobre todo si tienen finales inesperados.");
        }
    }

    function pregunta5 () {
        let pregunta_5 = prompt("Como ultima pregunta...\n¿Me gusta cantar? (Y/N)");
        if (pregunta_5.toUpperCase() === "Y") {
            console.log("###ERROR###!... Apesar que he estado en coros de la iglesia desde niña me da mucha vergüenza y no me gusta cantar");
            alert("###ERROR###\n Apesar que he estado en coros de la iglesia desde niña me da mucha vergüenza y no me gusta cantar");
        } else {
            console.log("###ERROR###... Apesar que he estado en coros de la iglesia desde niña me da mucha vergüenza y no me gusta cantar");
            alert("CORRECTO!!!\n Apesar que he estado en coros de la iglesia desde niña me da mucha vergüenza y no me gusta cantar");
            score++;
        }
            alert("Ahora te toca adivinar mi edad. Tendras 4 intentos!");
    }
    
    function pregunta6() {
            let years;
            let attempts = 0;
        
            while (years != 26 && attempts < 4) {
                years = prompt("¿Qué edad crees que tengo?");
                if (years < 26) {
                    console.log("Muy bajo");
                    alert("Muy bajo!\n Pero gracias por verme más joven 🤭.");
                } else if (years > 26) {
                    console.log("Muy alto");
                    alert("Muy alto!\n te doy una pista. Nací en los 90's.");

                } else {
                    console.log("CORRECTO, adivinaste");
                    alert("Correcto!\n Tengo 26 años ya pasé el cuarto de siglo 🙈.");
                    score++;
                    break;
                }
                attempts++;
            }
            alert("Mi edad es 26 años.");
        }


    function pregunta7() {
        let cineFavorito = ["romantico", "suspenso", "drama"];
        let attempts = 1;
        let respuestaCo = false;
        
        while (attempts <= 6 && !respuestaCo) {
            let cine = prompt("Adivina uno de mis géneros de cine favoritos:");
            cine = cine.toLowerCase();
        
            if (cineFavorito.includes(cine)) {
                console.log("CORRECTO, adivinaste");
                alert("Correcto!!\n Amo ese género de cine.");
                respuestaCo = true;
                score++;
            } else {
                console.log(cine, "INCORRECTO, intento " + attempts + " de 6");
                alert("Incorrecto!\n Pista, una de mis películas favoritas es One Day.");
            }
            attempts++;
        }
        
        console.log("Mis géneros de cine favoritos son: ", cineFavorito);
        alert("Mis géneros de cine favoritos son: romantico, suspenso y drama.");
    }


        
        pregunta1();
        pregunta2();
        pregunta3();
        pregunta4();
        pregunta5();
        pregunta6();
        pregunta7();
        alert("Tu score es: " + score + " puntos.");
    
    }
          
bienvenida();
preguntas();