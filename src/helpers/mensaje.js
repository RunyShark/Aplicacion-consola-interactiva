require("colors");

const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("=========================".rainbow);
    console.log("Seleciones una opción".brightCyan);
    console.log("=========================\n".rainbow);

    console.log(`${"1".brightCyan}. ${"Crear tarea".blue}`);
    console.log(`${"2".brightCyan}. ${"Listar tareas".blue}`);
    console.log(`${"3".brightCyan}. ${"Listar tareas completadas".blue}`);
    console.log(`${"4".brightCyan}. ${"Listar tareas pendientes".blue}`);
    console.log(`${"5".brightCyan}. ${"Completar tarea(s)".blue}`);
    console.log(`${"6".brightCyan}. ${"Borrar tarea".blue}`);
    console.log(`${"0".brightCyan}. ${"Salir".blue}\n`);
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Seleccione una opción: ".rainbow, (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const pause = () => {
  return new Promise((resvole) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(
      `\n${"precione".rainbow} ${"ENTER".brightCyan} ${
        "para continuar".rainbow
      }\n`,
      (opt) => {
        readline.close();
        resvole();
      }
    );
  });
};
module.exports = {
  mostrarMenu,
  pause,
};
