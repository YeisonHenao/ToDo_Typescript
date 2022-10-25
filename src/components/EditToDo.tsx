import { ToDo } from "../types"

interface Props {
  ItemToDo : ToDo
}

const EditToDo = ({ItemToDo}: Props) => {

  return(
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-between">
          <div className="col-md-5">
            <label>Title</label>
            <input className="form-control" type="text" value={ItemToDo.title} />
          </div>
          <div className="col-md-5">
            <label>Category</label>
            <input className="form-control" type="text" value={ItemToDo.category} />
          </div>
        </div>  
      </div> 
      <div className="row">
        <div className="d-flex justify-content-between">
        <div className="col-md-5">
            <label>Priority</label>
            <input className="form-control" type="text" />
          </div>
          <div className="col-md-5">
            <label>Date</label>
            <input className="form-control" type="text" />
          </div>
        </div>
      </div> 
      <div className="row">
        <div className="d-flex justify-content-between">
        <div className="col-md-5">
            <label>Progress To Do</label>
            <input className="form-control" type="number" />
          </div>
          <div className="col-md-5">
            <label>Author</label>
            <input className="form-control" type="text" />
          </div>
        </div>
      </div>
      <div className="row mt-5 mb-2">
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary">Save</button>
        </div>
      </div> 
    </div>
  )
}

export default EditToDo