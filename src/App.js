import './App.css';
import React, { useState } from 'react';

function App() {
  const [typedWords, setTypedWords] = useState("");
  const [time, setTime] = useState(20);

  function handleChange(e) {
    const {value} = e.target;
    setTypedWords(value);
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }

  return (
    <div>
      <h1 className='title'>Speed Typing Game</h1>
      <textarea value={typedWords} onChange={handleChange}/>
      <h1>Time Remaining: {time}</h1>
      <button>Start</button>
      <h1>Word Count: 11</h1>
    </div>
  )
}

export default App;
