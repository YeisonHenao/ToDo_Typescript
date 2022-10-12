import { useReducer } from "react";
import { FormLogin } from "../types";

interface LoginState{
  inputValues: FormLogin
}

const INITIAL_STATE = {
  user: '',
  password: ''
}

type LoginReducerAction = {
  type: "change_value",
  payload: {
    inputName : string,
    inputValue : string
  }
} | {
  type: "clear"
}

const loginReducer = (state: LoginState["inputValues"], action: LoginReducerAction) => {
  switch (action.type){
    case "change_value":
      const {inputName, inputValue} = action.payload
      return{
        ...state,
        [inputName]: [inputValue]
      }
    case "clear":
      return INITIAL_STATE
  }
}

const useLoginTodo = () => {
  return useReducer(loginReducer, INITIAL_STATE)
}

export default useLoginTodo