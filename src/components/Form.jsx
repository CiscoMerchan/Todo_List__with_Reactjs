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
  // Action onclick at 'add' buttom.(when form is submited)
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
    /*this props onSubmit will sent as n argument the newTodoList object for the function
    'addTodoList' in Manager.jsx inside the Form component. this create a transfer of information
    between the components*/ 
    props.onSubmit(newTodoList);
    
  } 

  return(
    <form 
      className='form-list'
      // form event listener once the user clicks on the button 'Add' 
      onSubmit={handleSendInput}
      >
      <input 
      className='form-input'
      type='text'
      placeholder='Insert text'
      name='text'
      // Take the input text to a function that handles the event
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