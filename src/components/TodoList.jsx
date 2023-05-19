import '../componentStyleSheet/TodoList.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function TodoList ({text}){
  return (
    <div className="todolist-container">
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