import s from './Todo.module.scss';
import logo from '../../../images/logo.png';
import { useSelector } from 'react-redux';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem/TodoItem';

function Todo(){
    let name = useSelector(state=>state.root.userData.username)
    let todos = useSelector(state=>state.root.todoList)


    return(
        <div className={s.todo_wrapper}>
            <div className={s.logo}><img src={logo} alt="logo" /></div>
            <div className={s.main_block}>
                <div className={s.text}>Thank you, {name}!</div>
                <div className={s.todo_block}>
                    <TodoForm/>
                </div>
                <div className={s.todo_list}>
                    <TodoItem todos={todos}/>
                </div>
            </div>
        </div>
    )
}

export default Todo;