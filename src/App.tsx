import Todo from "./components/Todo";
import Form from "./components/Form";
import { ToDo } from "./types";
import logo from "./assets/images/to-do-list.png";
import data from "./data/ToDo.json";
import { useEffect, useState } from "react";

function App() {
  const [listToDo, setListTodo] = useState<Array<ToDo>>([]);

  useEffect(() => {
    setListTodo(data);
  }, []);

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



      {/* Modal view */}
      <div
        className="modal modal-lg fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add New Task
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Form onNewTask={handleNewTask} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
