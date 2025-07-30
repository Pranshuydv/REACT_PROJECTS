import React from 'react'
import './App.css';
import { useState } from 'react';

const App = () => {
  const [darkmode, setDarkmode] = useState(false)
  return (
    <>
      <div className={darkmode ? "dark-theme" : "light-theme"}>
        <h1>Light/Dark Theme Toggle</h1>
        <button onClick={() => setDarkmode(!darkmode)}>
          {darkmode ? "switch to light" : "switch to dark"}
        </button>
      </div>
    </>
  )
}

export default App