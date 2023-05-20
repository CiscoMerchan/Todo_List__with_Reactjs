import Form from './Form';
import TodoList from './TodoList';
function Manager() {
  return(
    <>
      <Form />
      <div className='todolist-container'>
        <TodoList text='learn react'/> 
        <TodoList text='practice react'/>
        <TodoList text='sleep'/>
        <TodoList text='repeat'/> 
      </div>
    </>
  );
}
export default Manager;