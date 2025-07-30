import React from 'react';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [likecount, setLikecount] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="like-container">
      <div className="like-box">
        <button className="like-button"
          onClick={() => {
            setIsLiked(!isLiked);
            setLikecount(isLiked ? likecount - 1 : likecount + 1);
          }}
        >{isLiked ? "❤️" : "🤍"}
        </button>
        <p className="like-count">{likecount} Likes</p>
      </div>
    </div>
  );
};

export default App;
