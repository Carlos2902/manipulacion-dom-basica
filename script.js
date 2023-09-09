//CREACIÓN DE SELECTORES

//Leer contenido de HTML por medio de JS
//para seleccionar POR EL NOMBRE DE LA ETIQUETA se introduce la función querySelector
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');

const btnCalcular = document.querySelector('#btnCalcular');

const pResult = document.querySelector('#result');



form.addEventListener('submit', sumarInputs);


function sumarInputs(event)
{

    console.log({event});
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = 'El resultado de la suma de los valores es: ' + sumaInputs;
} 