// No cambiar nombre de funciones.

function mayorMenosMenor(arr) {
    // Obtener del array "arr" el número mayor y el menor. Devuelve la resta entre los mismos
    // NOTA: No utilizar los métodos "min" y "max" de "Math".
    //
    // Tu código:
    arr.sort((x,y) => {
        if(x<y){
            return -1;
        }
        if(x>y){
            return 1;
        }
        return 0;
    });
      let resta = arr[arr.length-1]- arr[0];
    return resta;
};

function ingredienteEnMalEstado(menu, comida, ingrediente) {
    // El ingrediente de cierta comida está en mal estado. Hay que sacar los ingredientes próximos a éste,
    // ya que deben estar contaminados también.
    // La funcion recibe un objeto "menu" que contiene las comidas del día. "comida" es un array de ingredientes.
    // Si "ingrediente" está en el array, devolver un array con el ingrediente y los elementos en un índice de 
    // diferencia.
    // Ej:
    /* let menuDelDia = {
        raviolesConSalsa: ["Harina", "Sal", "Huevos", "Aceite", "Peceto", "Ricota"],
        bagnaCauda: ["Ajo", "Anchoas", "Aceite", "Crema", "Papas", "Zanahorias"],
        tallarines: ["Harina", "Pollo", "Aceite", "Huevos", "Tomates", "Cebolla"]
    } */
    // ingredienteEnMalEstado(menuDelDia, "raviolesConSalsa", "Peceto") devuelve => ["Aceite", "Peceto", "Ricota"];
    // ingredienteEnMalEstado(menuDelDia, "tallarines", "Aceite") devuelve => ["Pollo", "Aceite", "Huevos"];
    // En caso de no encontrarse el ingrediente en la comida, devolver "El menú está perfecto".
    // NOTA: No utilizar el método "includes".
    //
    // Tu código:
    let badIngredients = []; // para colocar los ingredientes dañados
     
    const Food = menu [comida]; //apoyo para saber si las comidas estan dañadas o no.
    if(Food && Food.length){
        for(let i=0; i<Food.length; i++){
            if (Food[i]===ingrediente){
                if (i===0){
                    badIngredients.push(Food[i]);
                    badIngredients.push(Food[i+1]); 
                    }
                else if(i===Food.length-1){
                    badIngredients.push(Food[i-1]);
                    badIngredients.push(Food[i]);
                }
                else{
                    badIngredients.push(Food[i-1]);
                    badIngredients.push(Food[i]);
                    badIngredients.push(Food[i+1]);
                }
                break;
            }
        }

    }
    return badIngredients.length ? badIngredients: 'El menú está perfecto';
 
};

function bienvenidoSr(persona) {
    // La funcion recibe un objeto "persona".
    // de la forma: 
    // {
    //  nombre: 'Lionel
    //  apellido: 'Messi',
    //  invitado: true
    //  }
    // Si tiene la propiedad "invitado" y, además, tiene las propiedades "nombre" y "apellido", tomar esos valores y retorna:
    // "Lionel Messi, un gusto tenerlo nuevamente! Bienvenido".
    // Si tiene la propiedad "invitado" y solo tiene la propiedad "apellido", retornar:
    // "Bienvenido Sr. Messi".
    // Si tiene la propiedad "invitado" y solo tiene la propiedad "nombre", retornar:
    // "Hola Lionel, tu mesa está lista".
    // En caso de que no tenga la propiedad "invitado" retornar:
    // "Disculpe señor, no está invitado a la fiesta".
    // Tu código:
        let saludo = '';
    if(persona.apellido!=undefined && persona.nombre!=undefined && persona.invitado===true){
        saludo = persona.nombre+ ' '+ persona.apellido+ ', un gusto tenerlo nuevamente! Bienvenido';
        return saludo;
    }
    else if (persona.nombre===undefined && persona.apellido!=undefined && persona.invitado===true){
        saludo = 'Bienvenido Sr. '+ persona.apellido;
        return saludo;
    }
    else if ( persona.nombre!=undefined && persona.apellido=== undefined && persona.invitado===true){
        saludo = 'Hola '+ persona.nombre+', tu mesa está lista';
        return saludo;
    }    
    else if (persona.invitado!=true || persona.invitado===undefined){
        return "Disculpe señor, no está invitado a la fiesta";
    }
};

function obtenerSoloLosMejores(estudiantes, nota1, nota2) {
    // "estudiantes" es un array de objetos "estudiante". Crea un nuevo array con el nombre y apellido de los estudiantes
    // que en sus propiedades "check1" y "check2", tengan una nota mayor o igual a "nota1" y "nota2" respectivamente.
    // Ej:
    /* var estudiantes = [
        { nombre: "Mengano", apellido: "Solis", check1: 16, check2: 8},
        { nombre: "Fulano", apellido: "Rodriguez", check1: 20, check2: 20},
        { nombre: "Zutano", apellido: "Alvarez", check1: 10, check2: 0},
        { nombre: "Perengano", apellido: "Leiria", check1: 17, check2: 19}
    ] */
    // obtenerSoloLosMejores(estudiantes, 15, 15); retorna => ["Fulanito Rodriguez", "Perengano Leiria"];
    //
    // Tu código:
   

	const bestStudents = estudiantes.reduce((accum, estudiantes) => {
        if (estudiantes.check1 >= nota1 && estudiantes.check2 >= nota2) {
           return [ ...accum,  estudiantes];
          }
           return accum;
        }, []);
        return bestStudents;
    
};

function buscaDestruye(arreglo, num) {
    // La funcion 'buscaDestruye' recibe como argumento un array de enteros 'arreglo' y un entero 'num'.
    // Esta funcion tiene que eliminar los numeros del array que coincidan con el numero recibido como argumento (num).
    // La función debe retornar el array sin los números sacados.
    // Ej: buscaDestruye([1, 2, 3, 4], 2) devuelve => [1, 3, 4]
    // Nota: Si el numero se repite mas de una vez, tambien hay que eliminarlo.
    // Ej: buscaDestruye([1, 2, 3, 4, 1], 1) devuelve => [2, 3, 4]
    //
    // Tu código aca:
    const newNums = arreglo.filter(numer => numer !== num);
    return newNums;    
};

function clavesUnicas(obj1, obj2) {
    // La funcion recibe dos objetos "obj1" y "obj2".
    // Retornar las keys de las propiedades que sean únicas en cada objeto.
    // Ej:
    // let obj1 = {nombre: "Luciano", apellido: "Nicolau"}
    // let obj2 = {nombre: "Lio", segundoNombre: "Gustavo"}
    // clavesUnicas(obj1, obj2) retorna => ["apellido", "segundoNombre"];
    //
    // Tu código`:

    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    const mapping = [...obj1Keys, ...obj2Keys]
    .reduce((accum, key) => {
	if (accum[key]){
 		accum[key]++;
	}
	else {
		accum[key] = 1;
	}
    return accum;}, {});
    let arr = Object.keys(mapping)
    .filter(key => mapping[key] === 1);
    return arr;
};

function invertirLetras(frase) {
    // La funcion recibe un string "frase". Convertir las letras en minúsculas a mayúsculas y viceversa y devolver
    // la frase con dichos cambios.
    // TIP: Usar toLowerCase y toUpperCase
    // Para saber si un char es upper o lower, comparalo con el mismo char en upper o lower;
    // ej:
    //  'i' === 'i'.toLowerCase(); -> es lower;
    //  'I' === 'I'.toLowerCase()l -> no es lower;
    // Tu código:
    const chars = frase.split('').map(char => {
        const charToLowerCase = char.toLowerCase();
       if (char === charToLowerCase) return char.toUpperCase();
       return charToLowerCase;
      });
     
     return chars.join('');

};

// =======================================================================

function crearClaseAlumno() {
    class Alumno {
        constructor (nombre, apellido, cohorte, grupoDeAmigos, notasCheckpoints) {
            // El constructor de la clase recibe nombre (string), apellido (string), cohorte (number), 
            // grupoDeAmigos (array de objetos), notasCheckpoints (array de numbers).
            // Inicializar las propiedades del alumno con los valores recibidos como argumento.
            //
            // Tu código:
            this.nombre = nombre;
            this.apellido= apellido;
            this.cohorte = cohorte;
            this.grupoDeAmigos = grupoDeAmigos;
            this.notasCheckpoints = notasCheckpoints;
            
        };

        addAmigos(nombre, apellido) {
            // Este método debe agregar amigos al array de grupoDeAmigos del alumno.
            // Añade un objeto con las propiedades "nombre", "apellido" y "cohorte" (siendo 
            // el value de cohorte el mismo que tiene asignado la instancia de "Alumno") 
            // en el array de grupoDeAmigos.
            // No debe retornar nada.
            //
            // Tu código:
            
            

                    
        };

        obtenerAmigos() {
            // Este método debe devolver la cantidad de amigos que tiene el alumno.
            //return 
            // Tu código:
            return this.grupoDeAmigos;
            
        };

        addNota(nota) {
            // Este método añade una nota al array de notasCheckpoints
            // No debe retornar nada.
            //
            // Tu código:
            const notas = this.notasCheckpoints.push(nota);
            this.notasCheckpoints = notas;
            
        };

        obtenerNotas() {
            // Este método debe devolver un array con las notas del alumno.
            //
            // Tu código:
            let calificacion = [];
            for(let i=0; i<this.notasCheckpoints.length; i++){
            calificacion= this.notasCheckpoints[i];
            }
            return calificacion;            
        };

        presentacion() {
            // Este método debe devolver un string utilizando el nombre, el apellido y 
            // el cohorte del alumno.
            // Ej: Si ejecutamos presentacion() en la instancia de alumno, devolvería: 
            // "Hola, soy el alumno Lionel Messi del cohorte 13";
            //
            // Tu código:
            return 'Hola, soy el alumno '+this.nombre+' '+this.apellido+' del cohorte '+this.cohorte;

        };
        
    };
    const alumno = new Alumno ('Pedro', 'Perez', '1');
    alumno.addAmigos();
    return Alumno;
};

/* ====================== EXTRA CREDIT ===================== */
// Este ejercicio no cuenta en el puntaje del checkpoint
// pero si llegas hasta aca y lo haces quiere decir que venis super bien!

function intercambio(objeto) {
    // Devolver un objeto con los pares clave-valor intercambiados.
    // Ej: intercambio({ nombre: "Fulano", apellido: "Rodriguez" }); devuelve => { Fulano: "nombre", Rodriguez: "apellido" }
    // NOTA: No utilizar métodos de Object (values, keys, entries);
    //
    // Tu código:
    

            
     

};



// No modificar nada debajo de esta línea
// =======================================================================

module.exports = {
    mayorMenosMenor,
    ingredienteEnMalEstado,
    bienvenidoSr,
    obtenerSoloLosMejores,
    buscaDestruye,
    clavesUnicas,
    invertirLetras,
    crearClaseAlumno,
    intercambio
};
