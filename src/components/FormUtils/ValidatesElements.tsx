import { NewToDo } from "../../types"
import { Category , Priority } from "../../enum"

const parseString = (valueForm: any) => {
  if(!isString(valueForm)){
    throw new Error('Ingresa una fecha valida')
  }
  return valueForm
}

const parseNumber = (numberForm: any) => {
  if(!isNumber(numberForm)){
    throw new Error('Ingresa un numero valido')
  }
  return numberForm
}

const parseCategory = (categoryForm: any) => {
  if (!isString(categoryForm) || !isCategory(categoryForm)){
    throw new Error('Ingresa una categoria valida')
  }
  return categoryForm
}

const parsePriority = (priorityForm: any) => {
  if(!isString(priorityForm) || !isPriority(priorityForm)){
    throw new Error('Ingresa una prioridad validad')
  }
  return priorityForm
}


//? Types for validate Primitive
const isString = (string : string) : boolean => {
  return typeof string[0] === 'string'
}

const isNumber = (number: number) : boolean => {
  return typeof number === 'number'
}

const isCategory = (param: any): boolean => {
  return Object.values(Category).includes(param[0])
}

const isPriority = (param: any): boolean => {
  return Object.values(Priority).includes(param[0])
}

const validateElements = (object : any ) => {
  const newToDo : NewToDo = {
    date_creation: parseString(object.date_creation),
    title: parseString(object.title),
    body: parseString(object.body),
    priority: parsePriority(object.priority),
    category: parseCategory(object.category),
    value_min : parseNumber(object.value_min),
    value_max : parseNumber(object.value_max),
    value_now : parseNumber(object.value_now),
    user_creation: parseString(object.user_creation),
    status: parseNumber(object.status)
  }

  return newToDo
}

export default validateElements