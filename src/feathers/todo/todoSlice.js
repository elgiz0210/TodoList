import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    todos: []

}

export const todoSlice = createSlice({
    name: "Todos",
    initialState,
    reducers: {
        addTodo:(state,action) => {
            state.todos.push(action.payload)
        },
        completeTodo: (state, action) => {
            const findTodo = state.todos.find((item) => item.id === action.payload)
            findTodo.completed = !findTodo.completed
        },
        removeTodo:(state,action) => {
            state.todos = state.todos.filter(item => item.id !==  action.payload)
        },
    }
})

export const {addTodo, completeTodo,removeTodo,} = todoSlice.actions
export default todoSlice.reducer