import '../componentStyleSheet/TodoList.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function TodoList ({text, isDone}){
  return (
    <div className={isDone ? 'todolist-container todolist-container-done':'todolist-container'}>
      <div className="todolist-text">
        {text}
      </div>
      <div className="todolist-icon">
        <AiOutlineCloseCircle className="todolist-icon" />
      </div>
    </div>
  )
}
export default TodoList