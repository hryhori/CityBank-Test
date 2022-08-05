import s from './Todo.module.scss';
import { Formik } from 'formik';
import cancel_logo from '../../../images/cancel.png';
import * as yup from 'yup'
import { addTodo } from '../../../redux/root-reducer';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';

function TodoForm(){
    let dispatch = useDispatch();
    const validation = yup.object().shape({
        todoItem: yup.string().required('Пожалуйста, введите действие'),
      })
    return (
        <Formik
        initialValues={{todoItem: ''}}
        onSubmit={(values) => {dispatch(addTodo({id: v4(),text: values.todoItem, isChecked: false}))}}
        validationSchema={validation}>
        {({values,errors,handleSubmit,handleChange}) => (
            <div className={s.todo_form}>
                <label className={s.todo_label}>Todo</label>
                <input
                        className={`${s.inputStyle} ${
                          errors.todoItem && s.inputError
                        }`}
                        onChange={handleChange}
                        value={values.todoItem}
                        type="text"
                        name="todoItem"
                      />
                    {errors.todoItem && (
                      <div className={s.error_container}>
                        <img src={cancel_logo} alt="cancel" />
                        {errors.todoItem}
                      </div>
                    )}
                    <button onClick={handleSubmit} type='submit' className={s.submit_button}>Submit</button>
            </div>
        )
        }
        </Formik>
    )
}

export default TodoForm;