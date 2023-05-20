import { useState } from 'react';
// This component will take as input the todo Task
import '../componentStyleSheet/Form.css'
function Form(props) {
  
  const handleChange = e => {

  }
  
  const handleInput = e => {
    const newTodoList = {
      id: '11',
      text:
    }

  } 
  return(
    <form className='form-list'>
      <input 
      className='form-input'
      type='text'
      placeholder='Insert text'
      name='text'
      />
      <button className='form-button'
        onChange={}>
        Add
      </button>

    </form>
  );
}
export default Form;