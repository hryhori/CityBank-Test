import s from './Todo.module.scss';
import cancel_logo from '../../../images/cancel.png';
import { useDispatch } from 'react-redux';
import { changeIsChecked, deleteTodo } from '../../../redux/root-reducer';

function TodoItem({todos}){
    const dispatch = useDispatch();
    let toggle = (id) => dispatch(changeIsChecked(id));
    let remove = (id) => dispatch(deleteTodo(id));
    return todos.map((todoItem) => (
      <div className={s.todo_list_item} key={todoItem.id}>
        <input type="checkbox" value={todoItem.isChecked} onClick={()=>toggle(todoItem.id)}/>
        <span>{todoItem.text}</span>
        <img src={cancel_logo} alt="cancel" onClick={()=>remove(todoItem.id)}/>
      </div>
    ));
}

export default TodoItem;