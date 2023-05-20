import { useState } from 'react';
import Form from './Form';
import TodoList from './TodoList';
import '../componentStyleSheet/Manager.css'

function Manager() {

  const [todoList, setTodoList] = useState([]);

  const addTodoList = todoList => {
    console.log('add Text')
    console.log(todoList)
  }

  return(
    <>
      <Form />
      <div className='list-container'>
       {
        todoList.map((todoList,index) =>
          <TodoList 
            text={todoList.text}
            /*props to know is the the task have been click and it will 
            change the style. this a boolean*/ 
            isDone={todoList.isDone}

          />
        
        )
       }
      </div>
    </>
  );
}
export default Manager;