import React, { useState } from 'react'

const App = () => {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])
  return (
    <>
      <h1>Simple Todo-App</h1>
      <input
        type="text"
        placeholder='Enter task..'
        value={task}
        onChange={(e) => { setTask(e.target.value) }} />

      <button onClick={() => {
        if (task.trim() !== "") {
          setTodos([...todos, task])
          setTask("")
        } else {
          alert('please fill out')
        }
      }}
      >Add Task</button>

      <ul>
        {todos.map((item, index) =>
          <li key={index}>
            {item}

            <button onClick={() => {
              const updatedTodos = todos.filter((_, i) => i !== index);
              setTodos(updatedTodos);
            }
            }>
              ❌
            </button>
          </li>
        )}
      </ul>
    </>
  )
}

export default App