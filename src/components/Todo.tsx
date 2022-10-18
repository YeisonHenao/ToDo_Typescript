import { useState, useEffect } from "react"
import { ToDo } from "../types"
import data from "../data/ToDo.json"

const Todo = () => {
  const [listTodo, setListTodo] = useState<Array<ToDo>>([])

  useEffect(() => {
    setListTodo(data)
  }, [])

  return (
    <div>
      <div className="row">
        {listTodo.map((to) => {
          return (
            <div className="col-md-4 col-sm-12 col-lg-4">
                <div className="card">
                  <div className="card-header d-flex justify-content-between ">
                    <h6 className="text-uppercase">{to.title}</h6>
                    <span className="badge bg-primary text-white text-center">
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
                        className="progress-bar w-25"
                        role="progressbar"
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
