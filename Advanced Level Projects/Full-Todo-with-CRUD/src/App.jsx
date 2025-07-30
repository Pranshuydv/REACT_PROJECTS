import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  // Load todos from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) {
      setTodos(JSON.parse(stored));
    }
  }, []);

  // Save todos to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (editId) {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === editId ? { ...todo, text: text } : todo
        )
      );
      setEditId(null);
    } else {
      const newTodo = {
        id: Date.now(),
        text: text,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const deleteTodo = (id) => {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
  };

  const editTodo = (id) => {
    setEditId(id);
  };

  const getEditText = () => {
    const toEdit = todos.find((todo) => todo.id === editId);
    return toEdit ? toEdit.text : "";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">Todo App</h1>
        <TodoForm addTodo={addTodo} editText={getEditText()} />
        <TodoList todos={todos} onDelete={deleteTodo} onEdit={editTodo} />
      </div>
    </div>
  );
};

export default App;
