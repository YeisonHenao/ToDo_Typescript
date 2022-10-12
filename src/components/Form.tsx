import useNewFormTodo from "../Hooks/useFormStateHook";
import {FormUser} from '../types'

interface FormProps{
  onNewSub: (newSub: FormUser) => void
}

const Form = ({onNewSub} : FormProps) => {
  const [inputValues, dispatch ] = useNewFormTodo()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name , value} = e.target

    dispatch({
      type:"change.value",
      payload:{
        inputName: name,
        inputValue: value
      }
    })
  }

  return(
    <form>
      <input onChange={handleChange} type="text" name="name" value={inputValues.name} />
      <input onChange={handleChange} type="text" name="email" value={inputValues.email} />
      <input onChange={handleChange} type="password" name="password" value={inputValues.password} />
      <input onChange={handleChange} type="number" name="old_member" value={inputValues.old_member} />
      <input onChange={handleChange} type="text" name="date" value={inputValues.date_creation} />
      <button>Save User!</button>
    </form>
  );
}

export default Form