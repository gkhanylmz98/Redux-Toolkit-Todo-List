import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, completedTodo } from "../features/todosSlice";

const Todo = () => {
  const todosApp = useSelector((state) => state.todos.todosData);
  const completedTodo = useSelector((state) => state.todos.completed);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleComplete = (id) => {
    dispatch(completedTodo(id));
  };

  return (
    <>
      {todosApp.map((todo, index) => (
        <div
          className="todo-row"
          key={index}
          onClick={() => handleComplete(todo.id)}
        >
          <div> {todo.todoKey}</div>
          <div className="icons">
            <RiCloseCircleLine
              className="delete-icon"
              onClick={() => handleDelete(todo.id)}
            />
            <TiEdit className="edit-icon" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Todo;
