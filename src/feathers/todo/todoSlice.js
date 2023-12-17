import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo:(state,action) => {
            state.todos.push(action.payload)
        },
        completeTodo:(state,action) =>{
            const findTodo = state.todos.find((item) => item.id = action.payload)
            findTodo.completed = !findTodo.completed
        }
    }
})

export const {addTodo,completeTodo} = todoSlice.actions
export default todoSlice.reducer