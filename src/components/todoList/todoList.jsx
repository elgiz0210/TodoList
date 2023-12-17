import React from "react"; 
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addTodo } from "../../feathers/todo/todoSlice";
import TodoItem from "../todoItem/todoItem";

const TodoList = () => { 

    const [todoValue,setTodoValue] = React.useState('')
    const dispath = useDispatch()

    const addTodoHandler = () => {
        const todo = {
            id:v4(),
            text:todoValue,
            complated: false
        }
        dispath(addTodo(todo))
        setTodoValue('')


    }


    return( 
        <div> 
            <h2>Список покупок</h2> 
            <form> 
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
    ) 
} 
 
export default TodoList;