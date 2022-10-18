/*
-----------------------------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------------------------------------------
*/

// type categoryToDo = 'Test' | 'Job' |'Whatever' | 'Something More'
// type priorityToDo = 'High' | 'Medium' | 'Lower'
// type statusToDo = 'Without response' | 'In trade' | 'Finish'

//? Implementation for Todo Simple
export interface ToDo{
  id: number
  date_creation: string
  title: string
  body: string
  priority: string
  category: string
  value_min : number
  value_max : number
  value_now : number
  user_creation: string
  status: number
}

