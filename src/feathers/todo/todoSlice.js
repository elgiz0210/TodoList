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
            findTodo.completed = !findTodo.complete
        },
        removeTodo:(state,action) => {
            state.todos = state.todos.filter(item => item.id !==  action.payload)
        },
        // cancelTodo:(state,action) => {
        //     state.todos = !state.todos.push(() => !state.isCompleted !== action.payload)
        // },
        
        
    }
})

export const {addTodo, completeTodo,removeTodo,} = todoSlice.actions
export default todoSlice.reducer