import React, { useState }  from "react"; 
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addTodo } from "../../feathers/todo/todoSlice";
import TodoItem from "../todoItem/todoItem";
import  './/todoList.css' 

const TodoList = () => { 

    const [todoValue,setTodoValue] = useState('')
    const dispath = useDispatch()

    const addTodoHandler = () => {
        const todo = {
            id:v4(),
            text:todoValue,
            complatede: false
        }
        dispath(addTodo(todo))
        setTodoValue('')


    }


    return( 
    <div className="wrapper"> 
        <div className="container"> 
            <h2 className="title">Список покупок</h2> 
            <form className="form"> 
                <input
                type="text"
                placeholder="Название продукта"
                value={todoValue}
                onChange={(event) => setTodoValue(event.target.value)}
                /> 

                <input 
                type="button" 
                value="Добавить" 
                onClick={() => addTodoHandler()}
                /> 
            </form> 
            <TodoItem></TodoItem>
        </div>
    </div>    
    
    ) 
} 

export default TodoList;