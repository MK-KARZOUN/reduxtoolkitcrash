import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo, resetAll } from "../features/todo/todoSlice";

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

  const handleReset = () => {
    dispatch(resetAll());
  };

  const todosList = todos?.map((todo) => (
    <div className="flex justify-between items-center gap-2" key={todo.id}>
      <input
        className="text-center p-2 rounded-md"
        value={todo.text}
        onChange={(e) => {
          handleUpdateTodo(todo.id, e.target.value);
        }}
      />
      <button
        className="bg-red-500 text-white p-2 rounded-md"
        onClick={() => {
          handleDeleteTodo(todo.id);
        }}
      >
        Delete
      </button>
    </div>
  ));

  return (
    <div className="flex flex-col gap-2 ">
      <h1 className="text-lg">Todos List</h1>
      {todosList}
      <button
        className="p-2 bg-gray-500 text-white rounded-md"
        onClick={() => handleReset()}
      >
        reset
      </button>
    </div>
  );
};

export default RenderTodos;
