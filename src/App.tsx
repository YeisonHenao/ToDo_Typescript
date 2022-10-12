import { useState } from "react"
import { User } from './types';
//import Form from './components/Form';
import Login from "./components/Login";
import Todo from './components/Todo';

function App() {
  const [login , setLogin] = useState<boolean>(false)
  const [user,setUser] = useState<Array<User>>([])


  return (
    <div className="App">
      {
        login === true
        ? <Todo />
        : <Login onLogin={setUser} />
      }
    </div>
  );
}

export default App;
