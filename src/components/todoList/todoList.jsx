import React, { useState }  from "react"; 
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addTodo } from "../../feathers/todo/todoSlice";
import TodoItem from "../todoItem/todoItem";
import  './/todoList.css' 

const TodoList = () => { 

    const [todoValue,setTodoValue] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = () => {
        const todo = {
            id:v4(),
            text:todoValue,
            completed: false
        }
        dispatch(addTodo(todo))
        setTodoValue('')
    
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     dispatch(addTodo(todoValue))
    // }



    // const handleKeyPress = (e) =>{
    //     if(e.key === 'Enter'){
    //         handleSubmit(e)
    //     }
    }


    return( 
    <div className="wrapper"> 
        <div className="container"> 
            <h2 className="title">Todo List</h2> 
            <form className="form"> 
                <input
                className="entry-field"
                type="text"
                placeholder="Название продукта"
                // onKeyDown={handleKeyPress}
                value={todoValue}
                onChange={(event) => setTodoValue(event.target.value)}
                /> 

                <input 
                className="btn-add"
                type="button" 
                value="add" 
                onClick={() => addTodoHandler()}
                /> 
            </form> 
            <TodoItem></TodoItem>
        </div>
    </div>    
    
    ) 
} 

export default TodoList;