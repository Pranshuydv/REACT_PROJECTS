import React, { useEffect, useState } from "react";

const TodoForm = ({ addTodo, editText }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue(editText || "");
  }, [editText]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        type="text"
        placeholder="Enter todo..."
        className="flex-grow border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        {editText ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default TodoForm;
