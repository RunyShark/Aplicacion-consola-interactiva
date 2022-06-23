const Tarea = require("./tarea");

class Tareas {
  _listado = {
    abc: 123,
  };
  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });

    return listado;
  }

  constructor() {
    this._listado = {};
    this.listado = [];
  }

  BorrarTarea(id = "") {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }
  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }
  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    console.log();
    Object.keys(this._listado).map((tarea, i) => {
      const numero = `${i + 1}`.green;

      console.log(
        this._listado[tarea].completadoEn !== null
          ? `${numero}: ${this._listado[tarea].desc} :: ${"Completado".green}`
          : `${numero}: ${this._listado[tarea].desc} :: ${"Pendiente".red}`
      );
    });
  }

  listartPendientesCompletadas(completada = true) {
    console.log();
    let contador = 0;
    this.listadoArr.forEach((tarea) => {
      const { desc, completadoEn } = tarea;
      const extracto = completadoEn ? "Completada".green : "Pendiente".red;
      if (completada) {
        if (completadoEn) {
          contador += 1;
          console.log(`${contador.toString().green}: ${desc} :: ${extracto}`);
        }
      } else {
        if (!completadoEn) {
          contador += 1;
          console.log(`${contador.toString().green}: ${desc} :: ${extracto}`);
        }
      }
    });
  }
  toggleCompletadas(ids = []) {
    ids.forEach((id) => {
      const tarea = this._listado[id];
      if (!tarea.completadoEn) {
        tarea.completadoEn = new Date().toISOString();
      }
    });

    this.listadoArr.forEach((tarea) => {
      if (!ids.includes(tarea.id)) {
        this._listado[tarea.id].completadoEn = null;
      }
    });
  }
}

module.exports = Tareas;
