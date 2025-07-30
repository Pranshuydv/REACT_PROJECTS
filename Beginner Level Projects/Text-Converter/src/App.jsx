import React, { useState } from 'react'

const App = () => {
  const [text, setText] = useState('')
  return (
    <>
      <h1>Text-Converter</h1>
      <textarea placeholder='Type Here...' value={text} onChange={(e) => { setText(e.target.value) }}></textarea>
      <br />
      <br />
      <button onClick={() => { setText(text.toUpperCase()) }}>UPPERCASE</button>
      <button onClick={() => { setText(text.toLowerCase()) }}>lowercase</button>
    </>
  )
}

export default App