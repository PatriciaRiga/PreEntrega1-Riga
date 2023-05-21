/* SIMULADOR PARA CALCULAR PROMEDIOS Y OTORGAR PREMIOS A ALUMNOS CON PROMEDIOS ALTOS:

-Instancio como objetos a los alumnos.
-Los agrupo a todos en un array.
-El usuario elige un alumno para saber su promedio:
    Muestro al usuario opciones para que elija entre los objetos de mi array.
    Recibo la opción del usuario.
    Individualizo al alumno que haya elegido el usuario.
-Calculo el promedio del alumno elegido por el usuario en base a las 3 notas que el profesor le asignó.
-Otorgo un premio al alumno si obtuvo un promedio alto (de entre 9 y 10).
-Filtro alumnos para mostrar sólo a los que tengan un promedio alto.
*/

//Instancio como objetos a los alumnos a partir de una clase constructora:

class Alumno{
    constructor(id, nombre, nivel, nota1, nota2, nota3){
        this.id = id,
        this.nombre = nombre,
        this.nivel = nivel,
        this.nota1 = nota1,
        this.nota2 = nota2,
        this.nota3 = nota3,
        this.promedio = ""
    }
};

const alumno1 = new Alumno (1, "Jesse Pinkman", "intermedio", 8, 7, 8);
const alumno2 = new Alumno (2, "Hank Shrader", "avanzado", 9, 10, 9);
const alumno3 = new Alumno (3, "Walter White", "avanzado", 10, 9, 10);
const alumno4 = new Alumno (4, "Gustavo Fring", "básico", 3, 5, 7);
const alumno5 = new Alumno (5, "Saul Goodman", "intermedio", 5, 6, 7);

//Agrupo los objetos en un array:
const ALUMNOS = [alumno1,alumno2,alumno3,alumno4,alumno5];

//Creo la función que le va a dar inicio al proceso:
function mensajeInicio() {
    //Lanzo un mensaje de bienvenida para que el usuario acceda a su información:
    let mensajeBienvenida = "Bienvenido a tu curso de Inglés. Ingresá el número que corresponde a tu nombre y nivel: \n";

    //Le doy al mensaje contenido sobre cada alumno para ofrecerle opciones al usuario:
    ALUMNOS.forEach(alumno => {
        mensajeBienvenida += `${alumno.id} - ${alumno.nombre} del nivel ${alumno.nivel}\n`
        });

    //Lanzo el mensaje y espero la elección del usuario:
    let opcionUsuario = parseInt(prompt(mensajeBienvenida));

    //Evalúo la respuesta del usuario para asegurarme de que ingrese un dato válido:
    while(isNaN(opcionUsuario) || (opcionUsuario > 5)){
        alert("Ingresaste un valor no numérico o inválido, volvé a intentarlo.");
        opcionUsuario = parseInt(prompt(mensajeBienvenida));
        };

    //Individualizo al alumno a partir de la respuesta del usuario:
    return ALUMNOS.find(alumno => alumno.id === opcionUsuario);
};

//Llamo a la función creada para que se inicie la ejecución:
const alumnoElegido = mensajeInicio();

//Le muestro al usuario la opción que eligió:
alert(`Seleccionaste la opción ${alumnoElegido.id} - ${alumnoElegido.nombre} del nivel ${alumnoElegido.nivel}`);

//Creo una funcion para calcular el promedio del alumno en base a sus 3 notas:
let sumaNotas = (alumnoElegido.nota1 + alumnoElegido.nota2 + alumnoElegido.nota3) / 3;

function calcularPromedio(alumnoElegido) {
    alumnoElegido.promedio = sumaNotas;
};
calcularPromedio(alumnoElegido); 

//Premio a los alumnos cuya nota sea 9 o 10:
if (alumnoElegido.promedio >= 9) {
    alumnoElegido.promedio = alert(`El promedio de ${alumnoElegido.nombre} es ${alumnoElegido.promedio}. Por estar entre los alumnos con promedios altos, recibirás un premio en tu próxima clase. Que lo disfrutes!`);
    } else {
        alumnoElegido.promedio = alert(`El promedio de ${alumnoElegido.nombre} es ${alumnoElegido.promedio}. Cuando tu promedio sea 9 o 10, recibirás un premio. A seguir esforzándote!`);
};

//Filtro a los alumnos para crear un nuevo array en el cual sólo vea los alumnos premiados:
todosPromedio();

let alumnosPremio = ALUMNOS.filter(alumno => alumno.promedio >= 9);

function todosPromedio () {
ALUMNOS.forEach(alumno => { 
    alumno.promedio = (alumno.nota1 + alumno.nota2 + alumno.nota3) / 3;
    });
}
console.table(alumnosPremio);

//Muestro al usuario los alumnos que obtienen premios:
alert(`Los alumnos que reciben premio son ${ALUMNOS[1].nombre} y ${ALUMNOS[2].nombre}. ¡Felicitaciones!`);