import { useState } from 'react';
import { User } from './types';
import './App.css';
import Form from './components/Form';
import Todo from './components/Todo';

function App() {
  const [login , setLogin] = useState<boolean>(false)
  const [user,setUser] = useState<Array<User>>([])


  return (
    <div className="App">
      <h1>Hola mundo!</h1>
      {
        login === true
        ? <Todo />
        : <Form onNewSub={setUser} />
      }
    </div>
  );
}

export default App;
