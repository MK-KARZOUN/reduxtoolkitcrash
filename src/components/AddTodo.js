import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="">
      <form className="flex justify-between gap-2" onSubmit={addTodoHandler}>
        <input
          className="p-2 rounded-md"
          type="text"
          placeholder="Enter a Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="border bg-white p-2 rounded-md" type="submit">
          Add todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
