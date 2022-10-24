import { useReducer } from "react";
import { ToDo } from "../types";
import data from '../data/ToDo.json'

interface FormState{
  inputValues: ToDo
}

const getMaxId = () => {
  return Math.max(...data.map(x => x.id)) + 1
}

const INITIAL_STATE = {
  "id":getMaxId(),
  "date_creation":"",
  "title": "",
  "body":"",
  "priority": "",
  "category": "",
  "value_min": 0,
  "value_max": 100,
  "value_now": 0,
  "user_creation": "",
  "status": 1
}

type useFormReducer = {
  type: "change.value",
  payload:{
    inputName: string,
    inputValue: string
  }
} | {
  type : "clear"
}

const useReducerForm = (state: FormState["inputValues"] , action : useFormReducer ) => {
  switch(action.type){
    case "change.value":
      const {inputValue , inputName} = action.payload
      return{
        ...state,
        [inputName]: [inputValue]
      }
    case "clear":
      return INITIAL_STATE
    default:
      return state
  }
}

const useFormNewTask = () => {
  return useReducer(useReducerForm, INITIAL_STATE)
}

export default useFormNewTask

