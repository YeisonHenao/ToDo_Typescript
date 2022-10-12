import { useState, useEffect } from 'react'
import {ToDo} from '../types'
import data from '../data/ToDo.json'

const Todo = () => {

  const [listTodo, setListTodo] = useState<Array<ToDo>>([])

  useEffect(() => {
    setListTodo(data)
  },[])

  return(
    <div>
      <h1>Todo List</h1>
      <ul>
        {
          listTodo.map(to => {
            return <li>{to.title}</li>
          })
        }
      </ul>
    </div>
  )
}

export default Todo