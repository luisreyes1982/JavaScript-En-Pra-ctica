// declarar variables 
var x, y, text, suma, resta


// evento del boton sumar
let botonSuma = document.getElementById("btn-sumar")
botonSuma.addEventListener('click',
    // funcion sumar
    function () {
        x = document.getElementById("num1").value
        y = document.getElementById("num2").value

        // si lo que se escribe no es un numero (isNaN)
        if (isNaN(x) || isNaN(y)) {
            text = "Es necesario introducir dos numeros validos"
            // si la suma es normal se ejecuta 

        } else {
            suma = parseFloat(x) + parseFloat(y)
            text = suma
        }

        document.querySelector(".resultado").innerHTML = text

    }
)
// evento del boton restar
let botonResta = document.getElementById("btn-restar")
botonResta.addEventListener('click',
    // funcion restar
    function () {
        x = document.getElementById("num1").value
        y = document.getElementById("num2").value

        // si lo que se escribe no es un numero (isNaN)
        if (isNaN(x) || isNaN(y)) {
            text = "Es necesario introducir dos numeros validos"

            // si el resultado es negativo o igual a -1 (<= -1) escribira un 0 
        } else if (parseFloat(x) - parseFloat(y) <= -1) {
            text = 0
            // si la resta es normal se ejecuta 
        } else {
            resta = parseFloat(x) - parseFloat(y)
            text = resta
        }

        document.querySelector(".resultado").innerHTML = text

    }
)






//     let num1 = document.querySelector("valor1");
//     let num2 = document.querySelector("valor2");

//     let sumar = function(valor1, valor2){
//         let resultado = parseInt(valor1) + parseInt(valor2)
//         return resultado
//     }

// document.querySelector("resultado").innerHTML("Resultado de la suma es: " +sumar (num1, num2))