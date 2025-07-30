import React from "react";

const TodoList = ({ todos, onDelete, onEdit }) => {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center bg-gray-50 border px-4 py-2 rounded-md"
        >
          <span>{todo.text}</span>
          <div className="space-x-2">
            <button
              onClick={() => onEdit(todo.id)}
              className="text-yellow-500 hover:text-yellow-600"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="text-red-500 hover:text-red-600"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
