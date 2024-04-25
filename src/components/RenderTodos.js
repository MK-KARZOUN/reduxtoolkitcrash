import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

const RenderTodos = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();

  const handleDeleteTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleUpdateTodo = (id, text) => {
    dispatch(
      updateTodo({
        id: id,
        text: text,
      })
    );
  };

  const todosList = todos?.map((todo) => (
    <div className="flex justify-between items-center gap-2" key={todo.id}>
      <input
        className="text-center p-1"
        value={todo.text}
        onChange={(e) => {
          handleUpdateTodo(todo.id, e.target.value);
        }}
      />
      <button
        className="bg-red-500 text-white p-1"
        onClick={() => {
          handleDeleteTodo(todo.id);
        }}
      >
        Delete
      </button>
    </div>
  ));

  return (
    <div className="flex flex-col gap-2">
      <h1>Todos List</h1>
      {todosList}
    </div>
  );
};

export default RenderTodos;
