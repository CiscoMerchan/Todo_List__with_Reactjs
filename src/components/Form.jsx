import { useState } from 'react';
// This component will take as input the todo Task
import '../componentStyleSheet/Form.css'
function Form(props) {

  const [input, setInput] = useState('');
  
  const handleChange = e => {
    setInput(e.target.value);
    console.log(input)
  }
  
  const handleInput = e => {
    const newTodoList = {
      id: '11',
      text:'Hello'
    }

  } 
  return(
    <form className='form-list'>
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