// This component will take as input the todo Task
function Form(props) {
  return(
    <form className='form-list'>
      <input 
      className='form-input'
      type='text'
      placeholder='Insert text'
      name='text'
      />
      <button className='form-button'>
        Add
      </button>

    </form>
  );
}
export default Form;