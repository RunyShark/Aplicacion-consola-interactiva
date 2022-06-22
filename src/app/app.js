require("colors");
const { inquirerMenu, pausa, leerInput } = require("../helpers/inquire");
const Tarea = require("../models/tarea");
const Tareas = require("../models/tareas");

console.clear();

const main = async () => {
  let opt = "";
  const tareas = new Tareas();
  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await leerInput("Descripcion: ".brightCyan);
        tareas.crearTarea(desc);
        break;
      case "2":
        console.log(tareas._listado);
        break;
    }

    await pausa();
  } while (opt !== "0");
  {
  }
};
main();
