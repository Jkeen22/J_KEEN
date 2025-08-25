// *****************************PAGINA********************************

// document.getElementById("caja").innerHTML = "Hola Mundo";


// *****************************CONSOLA*******************************

// \\\\\\\\\\Variales y Constantes///////////////

// ---------Almacenar valores------------
// let nombre = 'Victor'
// var nombre = 'Victor'

// var x = "Victor" + " " + "Cruz"

// var nombre = "Jean Keen"
// var edad = 25
// var datos = `Mi nombre es ${nombre}, y tengo ${edad} años` (Alt + 96)

// const PI = 3.14



// \\\\\\\\\\Tipo de Datos///////////////

// ---------String----------------
// var tipo
// tipo = "Victor"
// console.log(typeof tipo)

// -----------numeric-------------
// var tipo
// tipo = 12345
// console.log(typeof tipo)

// ------------Booleano-----------
// var tipo
// tipo = false
// console.log(typeof tipo)



// \\\\\\\\\\\\\\\\Tipos de STRING//////////////////

// ------------------Lista---------------------
// let nombre = "Rojo \nAzul"

// -----------------Tipos----------------------
let fruta = "manzana"
console.log(fruta.toUpperCase())

let fruta = "manzana"
console.log(fruta.toLowerCase())

let fruta = "manzana"
console.log(fruta.indexOf('m'))

let fruta = "manzana"
console.log(fruta.slice(1,6))

let fruta = "manzana"
console.log(fruta.length)

let fruta = "manzana"
console.log(fruta.replace("manzana", "pera"))

let fruta = "manzana"
console.log(fruta.split(''))



// \\\\\\\\\\\\\\\\\\operadores////////////////////////

// ---------------------sumar------------------------
// var num1 = 5
// num1++
// console.log(num1)

// -------------------restar--------------------------
// var num1 = 5
// num1--
// console.log(num1)

// ---------------------dividir---------------------------
// var num1 = 5
// console.log(num1 / 5)

// -----------------------multiplicar--------------------
// var num1 = 5
// console.log(num1 * 5)



// \\\\\\\\\\\\\\\\\\\\\\\array/////////////////////

// ----------------------Nombres-----------------------
// var estudiantes = ["Elmer", "Keen", "Samuel", "Emerson", "Kevin"]
// console.log(estudiantes) o console.log(estudiantes [2])

// ----------------------Cantidad de valores almacenados-----------------------
// var estudiantes = ["Elmer", "Keen", "Samuel", "Emerson", "Kevin"]
// console.log(estudiantes.length)

// ------------------------orden descendente------------------------
// var estudiantes = ["Elmer", "Keen", "Samuel", "Emerson", "Kevin"]
// console.log(estudiantes.sort())

// -------------------------agregar al array-----------------------------
// var estudiantes = ["Elmer", "Keen", "Samuel", "Emerson", "Kevin"]
// console.log(estudiantes.push("Luis"))
// console.log(estudiantes)

// var estudiantes = ["Elmer", "Keen", "Samuel", "Emerson", "Kevin"]
// console.log(estudiantes.unshift("Luis"))
// console.log(estudiantes)

// --------------------------eliminar------------------------------------
// var estudiantes = ["Elmer", "Keen", "Samuel", "Emerson", "Kevin"]
// console.log(estudiantes.shift())
// 
// o
// 
// console.log(estudiantes.shift("Keen"))
// console.log(estudiantes)

// var estudiantes = ["Elmer", "Keen", "Samuel", "Emerson", "Kevin"]
// console.log(estudiantes.pop())
// console.log(estudiantes)

// ----------------------------posicion-----------------------------
// var estudiantes = ["Elmer", "Keen", "Samuel", "Emerson", "Kevin"]
// console.log(estudiantes.indexOf("Keen"))

// ----------------------------Concatenar------------------------------
// var grupo1 = [1,2,3]
// var grupo2 = [4,5,6]
// console.log(grupo1.concat(grupo2))



// \\\\\\\\\\\\\\\\\\\\\\\\\\\\Objetos////////////////////////////

// ---------------------------objetos---------------------------------
const auto = {
    marca: "Toyota",
    modelo: 2024,
    color: "Negro",
    accesorios: ["motor", "ruedas", "luces"]
}
console.log(auto)

console.log(auto.accesorios)

console.log(auto.marca)

console.log(auto.modelo)

console.log(auto.color)



// \\\\\\\\\\\\\\\\\\\\\\\\\\\Bucles////////////////////////////

// ----------------------------for-----------------------------
// for(let i = 0; i < 5; i = i + 1) {
//     console.log(i);
// };

// ----------------------------while-----------------------------
// let i = 0
// while (i < 8) {
//     console.log(i)
//     i++;
// }

// ----------------------------do while-----------------------------
// let i = 0
// do {
//     i++
//     console.log(i)
// } while (i < 22)



// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\Condicionales/////////////////////////////

// ------------------------------if-------------------------------
// var n1 = 3
// var n2 = 2
// if (n1 < n2) {
//     console.log(`${n1} es menor que ${n2}`)
// } 

// -----------------------------ifelse------------------------------
// var n1 = 3
// var n2 = 2
// if (n1 < n2) {
//     console.log(`${n1} es menor que ${n2}`)
// } else {
//     console.log(`${n1} es mayor que ${n2}`)
// }

// ------------------------------switch------------------------------
// let lenguaje = "Java"
// switch (lenguaje) {
//     case "JavaScript":
//         console.log(`El lenguaje de programacion es ${lenguaje}`)
//         break;

//     case "Python":
//         console.log(`El lenguaje de programacion es ${lenguaje}`)
//         break

//     case "Java":
//         console.log(`El lenguaje de programacion es ${lenguaje}`)
//         break

//     default:
//         console.log("No esta disponible")
//         break;
// }



// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\Funciones//////////////////////////////

// --------------------------------ejemplo-------------------------
// suma(8,4);
// function suma(a,b) {
//     var sum = a + b
//     console.log('la suma es '+ sum)
// }

// -------------------------------retorno---------------------------
// var Policia = datos_trabajador()
// function datos_trabajador() {
//     var salario = 25000;
//     console.log(`El salario es de ${salario}`)
// }

// o

// var Policia = datos_trabajador()
// function datos_trabajador() {
//     var salario = 25000;
// }
// console.log('El salario es de '+ Policia)

// -------------------------------anonima(flecha)------------------------------
// var restar = function (n1,n2) {
//     return n1 - n2
// }
// console.log(restar(8,2)) 

// o

// var restar = (n1,n2) => n1 - n2
// console.log(restar(8,2))

// o

// var nombre = () => "Keen"
// console.log(nombre())

// -----------------------------------anidada-------------------------------
// function operacion() {
//     const PI = 3.14
//     function area(radio) {
//         var area = PI * radio * radio
//         console.log(`El area del circulo es ${area}`)
//     }
//     operacion.area = area
// }

// var radio = 4
// operacion()
// operacion.area(radio)

// \\\\\\\\\\\\\\\\\\\\\\\pagina///////////////////////////
// function area() {
//     const PI = 3.14
//     var radio = document.getElementById("radio").value
//     var resultado = PI * radio * radio
//     document.getElementById("resultado").value = resultado
// }

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\Metodos//////////////////////////////////////////////////

// -----------------------------------------Foreach-------------------------------------------

// let num1 = [1,2,3,4,5,6,7]

// num1.forEach((value) => {
//     console.log( value == 5)
// })

// 

// var num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// for (var i = 0; i < num1.length; i++) {
//     console.log(num1[i]);
// }

//////////////////////////////////////////////////////////////////////////////////////

// var num1 = [1,2,3,4,5,6,7,8,9,0]

// num1.forEach(function(i){
//     console.log(i)
// })



// ----------------------------------------------some--------------------------------------------

// let num1 = [1,2,3,4,5,6]

// console.log(num1.some((value) =>{
//     return(value < 0)
// }))



// ---------------------------------------------every-------------------------------------------

// let num1 = [1,2,3,4,5,6]

// console.log(num1.every((value) => {
//     return(value == 5)
// }))



// ---------------------------------------------map-------------------------------------------

// let num1 = [1,2,3,4,5,6]

// let duplicar = num1.map(value => {
//     return value * 2
// })

// console.log(duplicar)



// ---------------------------------------------filter-------------------------------------------

// let num1 = [1,2,3,4,5,6,7]

// let resultado = num1.reduce((sumar, datos_act) => 
//     sumar + datos_act, 0
// )

// console.log(resultado)