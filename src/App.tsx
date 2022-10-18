import Todo from './components/Todo';
import logo from './assets/images/to-do-list.png'

function App() {

  return (
    <div className="App">
      <div className='bg-dark text-white p-3 d-flex justify-content-between mb-3'>
        <div className='d-flex justify-content-evenly'>
          <img src={logo} width="40" alt="logo" />
          <h5 className='m-2'>List ToDo</h5>
        </div>
        <button className='btn btn-primary'>Make a new Task</button>
      </div>
      <Todo />
    </div>
  );
}

export default App;
