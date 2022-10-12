//? Implementation for User
export interface User{
  id: number
  name: string
  email: string
  password: string
  old_member: number
  date_creation: string
  status: number
}

//? Type for new User
export type FormUser = Omit<User, 'id' , 'status'>


/*
-----------------------------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------------------------------------------
*/


type categoryToDo = 'Test' | 'Job' |'Whatever' | 'Something More'
type priorityToDo = 'High' | 'Medium' | 'Lower'
type statusToDo = 'Without response' | 'In trade' | 'Finish'

//? Implementation for Todo Simple
export interface ToDo{
  id: number
  date_creation: string
  title: string
  body: string
  priority: priorityToDo
  category: categoryToDo
  user_creation: number,
  status: statusToDo
}

