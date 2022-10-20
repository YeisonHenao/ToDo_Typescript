import { ToDo } from "../types"

interface Props{
  ToDoList: ToDo[]
}

const Todo = ({ToDoList}: Props) => {

  return (
    <div className="container-lg">
      <div className="row">
        {ToDoList.map((to) => {
          return (
            <div className="col-md-4 col-sm-12 col-lg-4" key={to.id}>
                <div className="card">
                  <div className="card-header d-flex justify-content-between ">
                    <h6 className="text-uppercase">{to.title}</h6>
                    <span className="badge bg-primary text-white text-center">
                      <label htmlFor=""></label>
                      <span>{to.category}</span>
                    </span>
                    <span className="badge bg-danger text-white text-center">
                      <span>{to.priority}</span>
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
                        style={{width: `${to.value_now}%`}}
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
          )
        })}
      </div>
    </div>
  )
}

export default Todo
