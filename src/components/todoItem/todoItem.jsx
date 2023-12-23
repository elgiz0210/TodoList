import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { completeTodo, removeTodo } from "../../feathers/todo/todoSlice";
import ".//list.css";

const TodoItem = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const completeTodoHandler = (id) => {
    dispatch(completeTodo(id));

  };
  const deleteTodoHandler = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div>
      {todos.map((item, idx) => {
        return (
          <div key={idx}>
            <ul className="todo">
              <span>
                <p className={`todoList-item ${item.completed ? `todoList-completed` : `` }`}>
                  {item.text}
                </p>
                <input
                  className={`done ${item.completed ? `cancel` : ''}`}
                  type="button"
                  value={`${item.completed ? `cancel` : "done"}`}
                  onClick={() => completeTodoHandler(item.id)}
                />
                <input
                  className="delete"
                  type="button"
                  value="delete"
                  onClick={() => deleteTodoHandler(item.id)}
                />{" "}
              </span>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default TodoItem;
