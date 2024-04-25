import React from "react";
import { useSelector } from "react-redux";

const LengthOfTodos = () => {
  const todos = useSelector((state) => state?.todoReducer?.todos) || [];

  return (
    <div className="flex flex-col gap-2 mt-4">
      <h2>LengthOfTodos</h2>
      <p className="text-orange-700">{todos?.length}</p>
    </div>
  );
};

export default LengthOfTodos;
