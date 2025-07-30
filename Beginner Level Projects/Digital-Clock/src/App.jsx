import React from 'react'
import { useState, useEffect } from 'react'

const App = () => {
  const [time, setTime] = useState('')

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(timer)
  }, [])
  return (
    <>
      <h1>Digital Clock</h1>
      <p>Time:{time}</p>
    </>
  )
}

export default App