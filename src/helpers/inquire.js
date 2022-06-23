const inquirer = require("inquirer");
require("colors");
const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "¿Qué desea hacer?",
    choices: [
      {
        value: 1,
        name: `${"1".brightCyan}. ${"Crear tarea".blue}`,
      },
      {
        value: 2,
        name: `${"2".brightCyan}. ${"Listar tareas".blue}`,
      },
      {
        value: 3,
        name: `${"3".brightCyan}. ${"Listar tareas completadas".blue}`,
      },
      {
        value: 4,
        name: `${"4".brightCyan}. ${"Listar tareas pendientes".blue}`,
      },
      {
        value: 5,
        name: `${"5".brightCyan}. ${"Completar tarea(s)".blue}`,
      },
      {
        value: 6,
        name: `${"6".brightCyan}. ${"Borrar tarea".blue}`,
      },
      {
        value: 0,
        name: `${"0".brightCyan}. ${"Salir".blue}\n`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("=========================".rainbow);
  console.log("Seleciones una opción".brightCyan);
  console.log("=========================\n".rainbow);

  const { opcion } = await inquirer.prompt(preguntas);

  return opcion;
};

const pausa = async () => {
  const preguntaa = [
    {
      type: "input",
      name: "enter",
      message: `\n${"precione".rainbow} ${"ENTER".brightCyan} ${
        "para continuar".rainbow
      }\n`,
    },
  ];
  console.log("\n");
  await inquirer.prompt(preguntaa);
};

const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return `Por favor ingrese un valor`.green;
        }
        return true;
      },
    },
  ];
  const { desc } = await inquirer.prompt(question);
  return desc;
};

const BorrarTarea = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}`.green;
    return {
      value: tarea.id,
      name: `${idx} ${tarea.desc}`,
    };
  });
  choices.unshift = {
    value: 0,
    name: 0 + "Cancelar".green,
  };
  const preguntas = [
    {
      type: "list",
      name: "id",
      message: "Borrar",
      choices,
    },
  ];
  const { id } = await inquirer.prompt(preguntas);
  return id;
};

const confirmar = async (message) => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];
  const { ok } = await inquirer.prompt(question);
  return ok;
};

module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
  BorrarTarea,
  confirmar,
};
