import { useState } from 'react';
import Form from './Form';
import TodoList from './TodoList';
import '../componentStyleSheet/Manager.css'

function Manager() {

  const [todoList, setTodoList] = useState([]);

  const addTodoList = newtodoList => {
    // this condition check if the text from the object is not empty
    if(newtodoList.text.trim()){

      // eliminate space at the start and the end of the text
      newtodoList.text = newtodoList.text.trim();

      /*array that take the new object from the form and the the 
      previous object in todoList curent state*/
      const newTodoListUpdated = [newtodoList, ...todoList];

      /*Update the current state of 'todoList' using the state function 'setTodoList'*/ 
      setTodoList(newTodoListUpdated);
    }
   }

    // function to delete <TodoList /> component. take 'id as argument 
  const deleteTodoList = id => {
    const newTodoListUpdated = todoList.filter(todoList => todoList.id !== id); 
    setTodoList(newTodoListUpdated);
   }
  const todoListDone =  id => {
    const newTodoListUpdated = todoList.map(todoList => {
      if(todoList.id === id) {
        /*if todoList.isDone is false it will become true and if 
        is true become false. This give a toggle property */
        todoList.isDone = !todoList.isDone;
      }
      // it will return that particular todoList that is inside the if condition.
      return todoList
    });
    setTodoList(newTodoListUpdated);
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
        todoList.map((todoLists) =>
          <TodoList
            /*key is mandatory will using .map in this case. but 
            because is not a props we don't access to the key argument
             so this is why just bellow there is id props with the same 
             argument thi diference is that we access to that props bellow.*/ 
            key={todoLists.id}
            // props id from the object to have access to the object
            id={todoLists.id}
            text={todoLists.text}
            /*props to know is the the task have been click and it will 
            change the style. this a boolean*/ 
            isDone={todoLists.isDone}
            /*porps event litsener to delete component */ 
            deleteTodoList={deleteTodoList}
             /*porps event litsener to change condition in isDone component */ 
            todoListIsDone={todoListDone}
          />
        )
       }
      </div>
    </>
  );
}
export default Manager;