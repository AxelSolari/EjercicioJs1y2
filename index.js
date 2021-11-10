console.log("SYNC");
//JAVASCRIPT PARTE 1


// Ejericio 1

// Crear el código que dada una distancia determine el medio de transporte apropiado de acuerdo a las siguientes reglas:

// 0 a 1000 metros = pie

// 1000 a 10000 metros = bicicleta

// 10000 a 30000 metros = colectivo

// 30000 a 100000 metros = auto

// +100000 = avion

// var ingreso = +prompt("Ingrese una distancia en Metros");

// const calculo = () => {
//     if (ingreso == ""){
//         alert("Ingrese parámetros válidos")
//     } else if (ingreso > 0 && ingreso < 1000){
//         console.log("El medio de transporte es a -Pie");
//     }else if (ingreso > 1001 && ingreso < 10000){
//         console.log("El medio de transporte es en Bicicleta");
//     }else if (ingreso > 10000 && ingreso < 30000){
//         console.log("El medio de transporte es en Colectivo");
//     }else if (ingreso > 30000 && ingreso < 100000){
//         console.log("El medio de transporte es en Auto");
//     }else if (ingreso > 100000){
//         console.log("El medio de transporte es en Avion");
//     }
// }
// calculo();


// Ejericio 2

// Crear el código que reciba como parámetro un array de números y devuelva el mayor.

// let array = [];
// let estado = 0;
// console.log(array);
// while (estado < 5){
    
//      var ingreso = array.push(+prompt("Ingrese 5 numeros"));
//      console.log(ingreso);
//      estado++;
// }

// console.log("El numero mas alto ingresado es; " + Math.max(...array));

//--------------------------------------------------------------------------------------//


//EJERCICIOS JS PARTE 2

// Ejercicio 1:

// Crear un documento html con 3 cuadrados que,
//  al ser clickeados, cambien el color de fondo del documento. Cada cuadrado debera tener un color distinto.
// let c1 = document.querySelector('div.c1');
// let c2 = document.querySelector('div.c2');
// let c3 = document.querySelector('div.c3');

// function onClick() {
//     c1.style.background = "red";
// }
// function onClick2(){

//     c2.style.background = "black";
// }

// function onClick3(){
//     c3.style.background = "blue";

// }


// Ejercicio 3:

// Dado el siguiente array de alumnos utilizar los métodos de array vistos 
// para generar un array con los alumnos aprobados. 
// Se considera aprobado todo alumno que tenga una nota mayor o igual a 7.


var alumnos = [
  {
    nombre: 'Juan Gomez',
    nota: 7
  }, {
    nombre: 'Pedro Rodriguez',
    nota: 4
  }, {
    nombre: 'Roxana García',
    nota: 8
  }, {
    nombre: 'Luciano Lopez',
    nota: 5
  }, {
    nombre: 'Fernanda Gimenez',
    nota: 6
  }, {
    nombre: 'Florencia Martinez',
    nota: 10
  }, {
    nombre: 'Raul Sanchez',
    nota: 7
  }, {
    nombre: 'Sandra Figueroa',
    nota: 8
  }
];

let aprobados = alumnos.filter(e => e.nota >= 7);
console.log(aprobados);
