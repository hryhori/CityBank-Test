import s from './TodoItem.module.scss';
import cancel_logo from '../../../../images/cancel.png';
import { useDispatch } from 'react-redux';
import { changeIsChecked, deleteTodo } from '../../../../redux/root-reducer';

function TodoItem({todos}){
    const dispatch = useDispatch();
    let toggle = (id) => dispatch(changeIsChecked(id));
    let remove = (id) => dispatch(deleteTodo(id));
    return todos.map((todoItem) => (
      <div className={s.todo_list_item} key={todoItem.id}>
        <input className={s.checkbox_input} type="checkbox" value={todoItem.isChecked} onClick={()=>toggle(todoItem.id)}/>
        <span className={s.todo_item_text}>{todoItem.text}</span>
        <img className={s.todo_cancel_image} src={cancel_logo} alt="cancel" onClick={()=>remove(todoItem.id)}/>
      </div>
    ));
}

export default TodoItem;