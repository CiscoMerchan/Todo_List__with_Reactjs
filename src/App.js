
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-list">
      <div className='logo-container'>
      <h1 className='logo'>To do List</h1>
      </div>
      <div className='title-container'>
        <h1>My List</h1>
        <TodoList text='Learn React by yourself, following the instructuction with freecodecamp '/>
      </div>
    </div>
  );
}

export default App;
