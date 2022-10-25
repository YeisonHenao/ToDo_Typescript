import useFormNewTask from "../Hooks/useFormNewTask";
import validateElements from './FormUtils/ValidatesElements'
import AlertComponent from "./AlertComponent";
import { ToDo } from "../types";
import categories from "../data/Category.json";
import priorities from '../data/Priority.json'
interface FormState {
  onNewTask: (newToDo: ToDo) => void;
}

const Form = ({ onNewTask }: FormState) => {
  const [inputValues, dispatch] = useFormNewTask();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | any > ) => {
    const { name, value } = e?.target;
    console.log(name + ' ' + value)
    dispatch({
      type: "change.value",
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    debugger
    try{
      validateElements(inputValues)
      onNewTask(inputValues);
      dispatch({ type: "clear" });
      AlertComponent.Success()
    }catch(e){
      AlertComponent.Error()
    }
  };

  return (
    <div className="container">
      <form autoComplete="false" onSubmit={handleSubmit}>
        <div className="row">
          <div className="d-flex justify-content-between">
            <div className="col-md-6 pe-2 ps-2">
              <label>Title</label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="title"
                placeholder="title"
                value={inputValues.title}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 pe-2 ps-2">
              <div className="form-group">
                <label>Category</label>
                <select className="form-select" name="category" onChange={handleChange} value={inputValues.category}>
                  <option defaultValue="Any" selected>Select a category</option>
                  {
                    categories.map(category => {
                      return <option key={category.label} value={category.value}>{category.label}</option>
                    })
                  }
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="d-flex justify-content-between">
            <div className="col-md-6 pe-2 ps-2">
              <div className="form-group">
                <label>Priority</label>
                <select name="priority" className="form-select" onChange={handleChange} value={inputValues.priority}>
                  <option defaultValue="Any" selected>Select a priority</option>
                  {
                    priorities.map(priority => {
                      return <option key={priority.label} value={priority.value}>{priority.label}</option>
                    })
                  }
                </select>
              </div>
            </div>
            <div className="col-md-6 pe-2 ps-2">
              <div className="form-group">
                <label>User</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="user_creation"
                  placeholder="user"
                  value={inputValues.user_creation}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="d-flex justify-content-between">
            <div className="col-md-6 pe-2 ps-2">
              <div className="form-group">
                <label>Date</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="date_creation"
                  placeholder="dd/MM/YYYY"
                  value={inputValues.date_creation}
                  onChange={handleChange}
                /> 
              </div>
            </div>
            <div className="col-md-6 pe-2 ps-2">
              <div className="form-group">
                <label>Description</label>
                <input
                  type="text"
                  name="body"
                  className="form-control form-control-lg"
                  placeholder="description"
                  value={inputValues.body}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="col-md-12 m-3">
            <button className="btn btn-primary">Save Task</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
