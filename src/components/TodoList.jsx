import '../componentStyleSheet/TodoList.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function TodoList ({ id, text, isDone, todoListIsDone , deleteTodoList }){
  return (
    <div className={isDone ? 'todolist-container todolist-container-done':'todolist-container'}>
      <div className="todolist-text"
        onClick={() => todoListIsDone(id)}>
        
        {text}
      </div>
      <div className="todolist-icon"
        onClick={() => deleteTodoList(id)}>

        <AiOutlineCloseCircle className="todolist-icon" />
      </div>
    </div>
  )
}
export default TodoList