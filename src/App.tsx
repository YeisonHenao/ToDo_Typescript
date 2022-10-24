// ? Importación de dependencias del componente
import Todo from "./components/Todo";
import { ToDo } from "./types";
import logo from "./assets/images/to-do-list.png";
import data from "./data/ToDo.json";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";

// ? Declaración del componente
function App() {
  const [listToDo, setListTodo] = useState<Array<ToDo>>([]);

  useEffect(() => {
    setListTodo(data);
  }, []);

  //? Funcion para actualizar el listado de tareas
  const handleNewTask = (newTask: ToDo) : void => {
    setListTodo(listToDo => [...listToDo,newTask])
  }

  return (
    <div className="App">
      <div className="bg-dark text-white p-3 d-flex justify-content-between mb-3">
        <div className="d-flex justify-content-evenly">
          <img src={logo} width="40" alt="logo" />
          <h5 className="m-2">List ToDo</h5>
        </div>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Make a new Task</button>
      </div>
      <Todo ToDoList={listToDo} />

      <Modal VoidCreate={handleNewTask} />
    </div>
  );
}

export default App;
