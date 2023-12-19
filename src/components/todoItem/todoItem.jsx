import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { completeTodo, removeTodo } from "../../feathers/todo/todoSlice";
import ".//list.css";

const TodoItem = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispath = useDispatch();

  const completeTodoHandler = (id) => {
    dispath(completeTodo(id));
    setIsCompleted(!isCompleted);
  };
  const deleteTodoHandler = (id) => {
    dispath(removeTodo(id));
  };
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div>
      {todos.map((item, idx) => {
        return (
          <div key={idx}>
            <ul className="todo">
              <span>
                <p
                  className={
                    item.completed ? "todoList-completed" : "todoList-item"
                  }
                >
                  {item.text}
                </p>
                <input
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
