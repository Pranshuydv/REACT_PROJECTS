import React from 'react'
import './App.css'

const App = () => {
  const images = ['1', '2', '3', '4', '5', '6']
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Image Gallery</h1>
      <div className="gallery">
        {images.map((item, index) => (
          <div className="image-card" key={index}>
            <img src={`/${item}.jpg`} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
    </>
  )
}

export default App