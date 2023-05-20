/*This component will take as input the todo Task*/ 

import { useState } from 'react';
// id generator
import { v4 as uuidv4 } from 'uuid';

import '../componentStyleSheet/Form.css'
function Form(props) {

  const [input, setInput] = useState('');
  
  const handleChange = e => {
    setInput(e.target.value);
    console.log(input)
  }
  
  const handleSendInput = e => {
    /*.preventDefault() avoid the refresh of the page*/ 
    e.preventDefault();

    /*newTodoList is and object that will represent the new text that will be render as text
    in <TodoList /> component */ 
    const newTodoList = {
      id: uuidv4(),
      // text from the input
      text: input,
      // Boolean that will define the style class in TodoList. default value 'false'
      isDone: false
    }
    // console.log(newTodoList) OK
    props.onSubmit(newTodoList);
  } 

  return(
    <form 
      className='form-list'
      onSubmit={handleSendInput}
      >
      <input 
      className='form-input'
      type='text'
      placeholder='Insert text'
      name='text'
      onChange={handleChange}
      />
      <button className='form-button'
        >
        Add
      </button>

    </form>
  );
}
export default Form;