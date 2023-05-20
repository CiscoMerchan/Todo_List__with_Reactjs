import Form from './Form';
import TodoList from './TodoList';
import '../componentStyleSheet/Manager.css'
function Manager() {
  return(
    <>
      <Form />
      <div className='list-container'>
        <TodoList text='learn react'/> 
        <TodoList text='practice react'/>
        <TodoList text='sleep'/>
        <TodoList text='repeat'/> 
      </div>
    </>
  );
}
export default Manager;