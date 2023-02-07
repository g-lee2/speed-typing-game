import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [typedWords, setTypedWords] = useState("");
  const [time, setTime] = useState(10);
  const [runTimer, setRunTimer] = useState(false);

  function handleChange(e) {
    const {value} = e.target;
    setTypedWords(value);
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }

  function handleClick() {
    setRunTimer(true)
  }

  useEffect(() => {
      if(runTimer && time > 0) {
          setTimeout(() => {
              setTime(times => times - 1)
          }, 1000)
      }
  }, [runTimer, time])

  return (
    <div>
      <h1 className='title'>Speed Typing Game</h1>
      <textarea value={typedWords} onChange={handleChange}/>
      <h1>Time Remaining: {time}</h1>
      <button onClick={handleClick}>Start</button>
      <h1>Word Count: 11</h1>
    </div>
  )
}

export default App;
