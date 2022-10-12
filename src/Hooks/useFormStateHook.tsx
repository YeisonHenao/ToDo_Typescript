import { useReducer } from "react";
import {FormUser} from '../types'

interface FormState {
  inputValues : FormUser
}

const INITIAL_STATE = {
  name : '',
  email: '',
  password: '',
  old_member: 0,
  date_creation: '',
}

type FormReducerAction = {
  type: "change.value",
  payload:{
    inputName : string,
    inputValue : string
  }
} | {
  type : "clear"
}

const formReducer = (state: FormState["inputValues"] , action: FormReducerAction) => {
  switch (action.type){
    case "change.value":
      const {inputName , inputValue} = action.payload
      return {
        ...state,
        [inputName] : [inputValue]
      }
    case "clear":
      return INITIAL_STATE
    }
}

const useNewFormTodo = () => {
  return useReducer(formReducer, INITIAL_STATE)
}

export default useNewFormTodo