import React from "react";
import useFormNewTask from "../Hooks/useFormNewTask";

const Form = () => {

  const [inputValues, dispatch] = useFormNewTask()


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name , value} = e.target
    dispatch({
      type:'change.value',
      payload:{
        inputName: name,
        inputValue: value
      }
    })
  }


  return (
    <form>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          name="title"
          placeholder="title"
          value={inputValues.title}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          className="form-control"
          name="body"
          placeholder="description"
          value={inputValues.body}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Category</label>
        <input
          type="text"
          className="form-control"
          name="category"
          placeholder="category"
          value={inputValues.category}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Priority</label>
        <input
          type="text"
          className="form-control"
          name="priority"
          placeholder="priority"
          value={inputValues.priority}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>User</label>
        <input
          type="text"
          className="form-control"
          name="user"
          placeholder="user"
          value={inputValues.user_creation}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Date</label>
        <input
          type="text"
          className="form-control"
          name="date"
          placeholder="dd/MM/YYYY"
          value={inputValues.date_creation}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default Form;


