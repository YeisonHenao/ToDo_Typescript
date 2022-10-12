import {FormLogin , User } from '../types'
import useLoginTodo from '../Hooks/useLoginStateHook'
import React, {useState} from 'react'
import Form from './Form'

interface LoginProps{
    onLogin: (login: FormLogin) => void
}

const Login = ({onLogin}: LoginProps) => {

    const [inputValues, dispatch] = useLoginTodo()
    const [existUser, setExistUser] = useState<boolean>(true)
    const [_newUser, setNewUser] = useState<Array<User>>([])

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target

        dispatch({
            type:"change_value",
            payload:{
                inputName: name,
                inputValue: value
            }
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onLogin(inputValues)
        dispatch({type: "clear"})
    }

    const handleNewUser = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setExistUser(!existUser)
    }

    return(
        <div>
            {
                existUser
                    ? <form onSubmit={handleSubmit}>
                        <input onChange={handleChange} type="text" placeholder='name' name={inputValues.user} />
                        <input onChange={handleChange} type="password" placeholder='password' name={inputValues.password} />
                        <button>Login!</button>
                        <br />
                        <br />
                        <button onClick={handleNewUser}>Create user</button>
                    </form>
                    : <Form onNewSub={setNewUser}   />
            }
        </div>
    )
}

export default Login