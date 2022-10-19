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

  const getMaxID = () => {
    return listToDo.map(param => {
      return Math.max(param.id) + 1
    })
  }

  const handleNewTodo = () => {
    setListTodo([
      ...listToDo,
      {
        id: getMaxID()[0],
        date_creation: "15-10-2022",
        title: "Second task",
        body: "Make Info from Indice",
        priority: "Medium",
        category: "Work",
        value_min: 0,
        value_max: 100,
        value_now: 30,
        user_creation: "Yeison",
        status: 1,
      },
    ]);
  };

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
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            {/* <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                New To Do
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="col-form-label">Recipient:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>
                <div className="mb-3">
                  <label className="col-form-label">Message:</label>
                  <textarea
                    className="form-control"
                    id="message-text"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button onClick={handleNewTodo} type="button" className="btn btn-primary">
                Send message
              </button>
            </div> */}
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
