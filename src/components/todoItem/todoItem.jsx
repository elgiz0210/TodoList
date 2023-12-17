import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { completeTodo } from "../../featuers/todo/todoSlice";
import ".//list.css";

const TodoItem = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispath = useDispatch();

  const completeTodoHandler = (id) => {
    dispath(completeTodo(id));
  };

  return (
    <div>
      {todos.map((item, idx) => {
        return (
          <div key={idx}>
            <span
              className={`todoList-item ${
                item.completed ? `todoList-complated` : ``
              }`}
            >
              {item.text}
            </span>
            <input
              type="button"
              value="выполнено"
              onClick={() => completeTodoHandler(item.id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TodoItem;
