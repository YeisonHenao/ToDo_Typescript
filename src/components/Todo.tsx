import React from "react";
import { ToDo } from "../types";
import ModalEditToDo from "./ModalEditToDo";
import IconEdit from "./IconEdit";

interface Props {
  ToDoList: ToDo[];
}

const Todo = ({ ToDoList }: Props) => {
  const HandleClick = (param: ToDo, e: React.MouseEvent<HTMLButtonElement, MouseEvent>): ToDo => {
    e.preventDefault();
    let item = ToDoList.filter((x) => x.id === param.id);
    ModalEditToDo(item[0])
    return item[0];
  };

  return (
    <div>
      <div className="container-lg">
        <div className="row mt-2">
          {ToDoList.map((to) => {
            return (
              <div className="col-md-4 col-sm-12 col-lg-4" key={to.id}>
                <div className="card">
                  <div className="card-header d-flex justify-content-between ">
                    <h6 className="text-uppercase">{to.title}</h6>
                    <div>
                      <span className="badge bg-primary text-white text-center ms-2 me-2">
                        <span>{to.category}</span>
                      </span>
                      <span className="badge bg-danger text-white text-center ms-2 me-2">
                        <span>{to.priority}</span>
                      </span>
                    </div>
                    <button
                      onClick={(event) => HandleClick(to, event)}
                      data-bs-toggle="modal"
                      data-bs-target="#ModalEditToDo"
                      className="badge"
                    >
                      <IconEdit />
                    </button>
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p>{to.body}</p>
                      <p className="text-muted">{to.date_creation}</p>
                    </div>
                    <br />
                    <small className="text-muted">Status</small>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${to.value_now}%` }}
                        aria-valuenow={to.value_now}
                        aria-valuemin={to.value_min}
                        aria-valuemax={to.value_max}
                      >
                        {to.value_now}%
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <span className="text-muted">
                      Task create for:{" "}
                      <span className="fst-italic">{to.user_creation}</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
     <ModalEditToDo />
    </div>
  );
};

export default Todo;
