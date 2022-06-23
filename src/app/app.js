require("colors");
const {
  inquirerMenu,
  pausa,
  leerInput,
  BorrarTarea,
  confirmar,
} = require("../helpers/inquire");
const { guardarDB, leerDB } = require("../helpers/guardarFiles");
const Tarea = require("../models/tarea");
const Tareas = require("../models/tareas");

console.clear();

const main = async () => {
  let opt = "";
  const tareas = new Tareas();
  const tareasDB = leerDB();

  if (tareasDB) {
    tareas.cargarTareasFromArray(tareasDB);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case 1:
        const desc = await leerInput("Descripcion: ".brightCyan);
        tareas.crearTarea(desc);
        break;
      case 2:
        console.log(tareas.listadoCompleto());
        break;
      case 3:
        console.log(tareas.listartPendientesCompletadas(true));
        break;
      case 4:
        console.log(tareas.listartPendientesCompletadas(false));
        break;
      case 6:
        const id = await BorrarTarea(tareas.listadoArr);
        if (id !== 0) {
          const confirmarBorrar = await confirmar("¿Está segur?");
          if (confirmarBorrar) {
            tareas.BorrarTarea(id);
            console.log("Tarea borrada correctamente".brightCyan);
          }
        }

        break;
    }
    await pausa();
    //guardarDB(tareas.listadoArr);
  } while (opt !== "0");
  {
  }
};
main();
