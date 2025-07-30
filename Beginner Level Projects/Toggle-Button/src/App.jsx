import React, { useState } from 'react'

const App = () => {

  const [password, setPassword] = useState('')
  const [showpassword, setShowpassword] = useState(false)

  return (
    <>
      <h1>Show/Hide Toggle</h1>
      <input
        type={showpassword ? "text" : "password"}
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => setShowpassword(!showpassword)}>
        {showpassword ? "Hide" : "Show"}
      </button>
    </>
  )
}

export default App