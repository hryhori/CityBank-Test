import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: {
        username: 'Admin',
        password: '12345',
    },
    todoList:[

    ],
}

const RootReducer = createSlice({
    name: 'root',
    initialState,
    reducers:{
        addTodo: (state, action) =>{
            state.todoList.push(action.payload)
        },
        changeIsChecked: (state, action) =>{
            const toggleTodo =  state.todoList.find((todo)=>todo.id===action.payload);
            toggleTodo.isChecked = !toggleTodo.isChecked;
        },
        deleteTodo: (state, action) =>{
          state.todoList =  state.todoList.filter(todo=>todo.id!=action.payload);
        }
    }
})


export const {addTodo, changeIsChecked, deleteTodo} = RootReducer.actions;
export default RootReducer.reducer;