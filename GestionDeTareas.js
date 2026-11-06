// =====================================
// Sistema de Gestión de Tareas
// =====================================

/*
INSTRUCCIONES GENERALES:

1. Lee cuidadosamente cada sección.
2. Completa únicamente donde se indica con TODO.
3. No borres la estructura base.
4. Agrega comentarios explicando tu lógica.
5. Prueba cada función antes de continuar.
6. NO USAR INTELIGENCIA ARTIFICIAL.
*/


// =====================================
// 1. Arreglo inicial de tareas
// =====================================

/*
Cada tarea tiene:
- nombre: string
- prioridad: number (1 = alta, 2 = media, 3 = baja)
- completada: boolean
*/

const tareas = [
  { nombre: "Ir a la playa", prioridad: 1, completada: false },
  { nombre: "Estudiar JS", prioridad: 2, completada: true },
  { nombre: "Ver películas", prioridad: 3, completada: false }
];


// =====================================
// 2. Funciones
// =====================================

/*
TODO 1:
Crear una función que recorra el arreglo de tareas
y muestre en consola:
- nombre de la tarea
- estado: "Completada" o "Pendiente"
*/
function mostrarTareas(lista) {
  lista.forEach(tarea => {
    console.log(`Nombre: ${tarea.nombre}`);
    let estado = tarea.completada
    if(estado===true){
      console.log("Estado: Completada")
    }
    if(estado===false){
      console.log("Estado: Pendiente")
    }
  });
}


/*
TODO 2:
Crear una función flecha que retorne
solo las tareas completadas.
Usar filter.
*/
const obtenerCompletadas = (lista) => {
  const tareasCompletadas= lista.filter(tarea => tarea.completada === true);

  console.log("Tareas completadas:")
  tareasCompletadas.forEach(tarea =>{
    console.log(`${tarea.nombre}`)
  })
}


/*
TODO 3:
Crear una función flecha que retorne
solo las tareas pendientes.
Usar filter.
*/
const obtenerPendientes = (lista) => {
  const tareasPendientes= lista.filter(tarea => tarea.completada === false);

  console.log("Tareas pendientes:")
  tareasPendientes.forEach(tarea =>{
    console.log(`${tarea.nombre}`)
  })
}


/*
TODO 4:
Crear una función flecha que retorne
solo los nombres de las tareas.
Usar map.
*/
const obtenerNombres = (lista) => {
  nombres = lista.map(tarea=>{
    console.log(tarea.nombre)
  })
};


/*
TODO 5:
Crear una función que retorne
el total de tareas.
*/
function contarTareas(lista) {
  console.log("Total de tareas: " + lista.length)
}


// =====================================
// 3. Objeto sistema
// =====================================

/*
TODO 6:
Completar los métodos usando this.tareas

- mostrarTareas: debe llamar a la función mostrarTareas
- mostrarCompletadas: debe usar obtenerCompletadas
- mostrarPendientes: debe usar obtenerPendientes
*/

const sistema = {
  tareas: tareas,

  mostrarTareas: function() {
    mostrarTareas(this.tareas)
  },

  mostrarCompletadas: function() {
    obtenerCompletadas(this.tareas)
  },

  mostrarPendientes: function() {
    obtenerPendientes(this.tareas)
  }
};


// =====================================
// 4. Condicionales
// =====================================

/*
TODO 7:

- Si el arreglo tareas está vacío:
  mostrar "No hay tareas"

- Si todas las tareas están completadas:
  mostrar "Todas las tareas completadas"
*/
function condicionales(lista){
  if(lista.length===0){
    console.log("no hay tareas")
    return;
  }

  const tareasCompletadas= lista.filter(tarea => tarea.completada === true);
  if(lista.length===tareasCompletadas.length){
    console.log("todas las tareas completadas")
  }
}

// =====================================
// 5. Switch
// =====================================

/*
TODO 8:

Usar la variable opcion para ejecutar:

1 -> mostrar todas las tareas
2 -> mostrar tareas completadas
3 -> mostrar tareas pendientes
default -> mostrar "Opción inválida"
*/

//si probe que todo funcionara con opcion 1, 2, 3 o diferente (default)
const opcion = 4;
console.log("TODO 8 ---------- se muestra aqui porque esta mas arriba en el codigo")
switch (opcion) {
  case 1:
    mostrarTareas(tareas)
    break;

  case 2:
    obtenerCompletadas(tareas)
    break;

  case 3:
    obtenerPendientes(tareas)
    break;

  default:
    console.log("Opción inválida");
}
console.log("")


// =====================================
// 6. Pruebas
// =====================================

/*
TODO 9:

Llamar funciones para comprobar que todo funciona correctamente.
Usar console.log donde sea necesario.
*/

console.log("TODO 1----------")
mostrarTareas(tareas);
console.log("")

console.log("TODO 2----------")
obtenerCompletadas(tareas);
console.log("")

console.log("TODO 3----------")
obtenerPendientes(tareas);
console.log("")

console.log("TODO 4----------")
obtenerNombres(tareas);
console.log("")

console.log("TODO 5----------")
contarTareas(tareas);
console.log("")

console.log("TODO 6----------")
console.log("===Mostrar tareas===")
sistema.mostrarTareas()
console.log("===Mostrar pendientes===")
sistema.mostrarPendientes()
console.log("===Mostrar completadas===")
sistema.mostrarCompletadas()
console.log("")

console.log("TODO 7----------")
//aqui puse para mostrar los 2 casos pedidos de una vez
const listavacia=[]
condicionales(listavacia)
const solocompletadas = [
  { nombre: "Si", prioridad: 1, completada: true },
  { nombre: "No", prioridad: 2, completada: true },
  { nombre: "Tal vez", prioridad: 3, completada: true }
];
condicionales(solocompletadas)
console.log("")