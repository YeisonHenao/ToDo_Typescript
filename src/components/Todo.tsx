import { ToDo } from "../types";

interface Props {
  ToDoList: ToDo[];
}

const Todo = ({ ToDoList }: Props) => {
  return (
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
                      <label htmlFor=""></label>
                      <span>{to.category}</span>
                    </span>
                    <span className="badge bg-danger text-white text-center ms-2 me-2">
                      <span>{to.priority}</span>
                    </span>
                  </div>
                  <span className="badge">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="black"
                      className="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fillRule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                  </span>
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
  );
};

export default Todo;
