// const { stdout } = require('process');

const readline = require("readline-sync");

let taskList = [
  {
    id: 1,
    taskName: "TASK 1",
    taskDescriprion: "Task 1 Description",
    taskCompleted: false,
  },
  {
    id: 2,
    taskName: "TASK 2",
    taskDescriprion: "Task 2 Description",
    taskCompleted: true,
  },
  {
    id: 3,
    taskName: "TASK 2",
    taskDescriprion: "Task 3  Description",
    taskCompleted: false,
  },
];

const pregunta = async () => {
  let continuar = true;

  while (continuar === true) {
    console.log("Bienvenido a tu lista de tareas, escoge qué deseas hacer:");
    console.log("1. Crear tarea");
    console.log("2. Completar tarea");
    console.log("3. Borrar tarea");
    console.log("4.salir");
    const eleccion = readline.question(`Escoge una opcion: `);
    switch (eleccion) {
      case "1":
        try {
          await createTask(taskList);
          console.log(`La tarea ha sido añadida.`);
        } catch (error) {
          console.log("Error al completar la tarea:", error);
        }
        break;
      case "2":
        try {
          await completeTask(taskList);
          console.log(`Tarea cambiada de estado con éxito.`);
        } catch (error) {
          console.log("Error al completar la tarea:", error);
        }
        break;
      case "3":
        try {
          await deleteTask(taskList);
          console.log(
            `La tarea ha sido borrada con éxito, este es tu nuevo listado de tareas:`
          );
        } catch (eror) {
          console.log("Error al completar la tarea:", error);
        }
        break;
      case "4":
        continuar = false;
        break;
      default:
        console.log("Opción invalida");
        break;
    }
  }
};

const createTask = async (taskList) => {
  const newTaskName = readline.question(
    `Por favor inserta el nombre de la nueva tarea: `
  );
  const newTaskDescription = readline.question(
    `Por favor inserta la descripcion de la nueva tarea: `
  );
  let newTaskItem = {
    id: taskList.length + 1,
    taskname: newTaskName,
    taskDescriprion: newTaskDescription,
    taskCompleted: false,
  };

  taskList.push(newTaskItem);
  console.log(taskList);
};

const deleteTask = async (taskList) => {
  console.log("Aquí está el listado actual de tareas: ");
  console.log(taskList);
  const taskToDelete = readline.question(
    `Por favor escribe el ID tarea que quieres borrar: `
  );
  if (taskToDelete <= taskList.length) {
    taskList.splice(taskToDelete - 1, 1);
  }

  console.log(taskList);
};

const completeTask = async (taskList) => {
  const taskToComplete = readline.question(
    `Por favor escribe el ID  de la tarea que deseas marcar como completada: `
  );
  if (taskList[taskToComplete - 1].taskCompleted === false) {
    taskList[taskToComplete - 1].taskCompleted =
      !taskList[taskToComplete - 1].taskCompleted;
    console.log(`La tarea con el ID ${taskToComplete} ha sido completada.`);
  } else {
    console.log(`La tarea con el ID ${taskToComplete} ya ha sido completada.`);
  }

  console.log(`El listado final de tareas es el siguiente: `);
  console.log(taskList);
};

pregunta();
