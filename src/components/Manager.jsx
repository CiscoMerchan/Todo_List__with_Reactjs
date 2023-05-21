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
      <Form 
        /* This prop send the an argument already set in Form.jsx(an object in this case)
         to the function that is inside the bracket(in this case 'addTodoList') this
         fuction takes an argument 'todoList' ('todoList' value argument in this case
         is 'newTodoList' object from Form.jsx) and that argument/value will be access 
         inside addTodoList function, after that argument is use in 'useState' */
        
        onSubmit={addTodoList}
      />
      <div className='list-container'>
       {
        todoList.map((todoList,index) =>
          <TodoList 
            // text={todoList.text}
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