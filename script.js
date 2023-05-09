//SIMULADOR PARA CALCULAR EL PROMEDIO DE LOS ESTUDIANTES DE UN CURSO DE INGLES

//Declaración de variables de notas, promedio, nombre del curso y del módulo
const primerCurso = "Nivel principiantes.";
const primerModulo = "1: Conceptos Básicos";
let promedio = 0;
let notaAlumno = 0;
let sumaNotas = 0;

//Función para darle la bienvenida al usuario 
function saludoBienvenida() {
    nombre = prompt("Bienvenido/a tu curso de Inglés! Ingresá tu nombre y apellido:");
    console.log(nombre);
}

//Función para calcular el promedio en base a las notas ingresadas en cada área.
function calcularPromedio() {
    promedio = sumaNotas / 3;
}

//Función para despedir al usuario al finalizar la ejecución.
function saludoDespedida() {
    alert("Adiós, y a seguir estudiando!");
}

saludoBienvenida();

/*Prompt para que el alumno ingrese su nivel. Sólo se ejecutará el resto si el usuario pertenece al nivel principiantes*/
eleccionAlumno = (prompt("A qué nivel pertenecés? Ingresá la opción correcta: \n1. Nivel principiantes \n2. Nivel intermedio \n3. Nivel avanzado"));
console.log(eleccionAlumno);

if (eleccionAlumno === "1") {

    // El ciclo termina cuando el alumno mejora la nota y su promedio es igual o mayor a 6.
    while (promedio < 6) {

        //Prompt para saber la primer nota del usuario.
        let notaAlumno = parseInt(prompt("Ingresá tu nota de Fonética"));
        sumaNotas += notaAlumno;
        console.log(notaAlumno);

        //*Condicionales para evaluar si el usuario obtuvo tres notas entre 6 y 10. Debe haber aprobado todas las áreas con una nota mayor o igual a 6 para poder continuar.*//
        if (notaAlumno >= 6 && notaAlumno <= 10) {
            notaAlumno = parseInt(prompt("¡Felicitaciones! Aprobaste el área de Fonética. Ingresá tu nota de Gramática"));
            sumaNotas += notaAlumno;
            console.log(sumaNotas);

            if (notaAlumno >= 6 && notaAlumno <= 10) {
                notaAlumno = parseInt(prompt("¡Felicitaciones! Aprobaste el área de Gramática. Ingresá tu nota de Participación en Clase"));
                sumaNotas += notaAlumno;
                console.log(sumaNotas);

                if (notaAlumno >= 6 && notaAlumno <= 10) {
                    alert("¡Felicitaciones! Aprobaste todas las áreas de este curso.");
                    console.log(sumaNotas);
                    calcularPromedio();
                    alert(`El promedio de ${nombre} en el módulo ${primerModulo} es ${promedio}.`);
                    console.log(promedio);
                    saludoDespedida();

                    //*Declaramos sumaNotas = 0 en los "else" para poder resetear el contador, de lo contrario cuando vuelve al while, queda acumulado *//
                } else {
                    alert("Lo sentimos, tendrás que participar más activamente en clase.");
                    saludoDespedida();
                    sumaNotas = 0;
                }
            } else {
                alert("Lo sentimos, tendrás que hacer el recuperatorio del área de Gramática.");
                saludoDespedida();
                sumaNotas = 0;
            }
        }
        else {
            alert("Lo sentimos, tendrás que hacer el recuperatorio del área de Fonética.");
            saludoDespedida();
            sumaNotas = 0;
        };
    }

} else {
    alert(`${nombre}, no perteneces al Nivel principiante.`);
}