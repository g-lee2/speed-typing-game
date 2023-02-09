import './App.css';
import React, { useState, useEffect, useRef } from 'react';

function App() {
  const STARTING_TIME = 5;

  const [typedWords, setTypedWords] = useState("");
  const [time, setTime] = useState(STARTING_TIME);
  const [runTimer, setRunTimer] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const inputRef = useRef(null);

  function handleChange(e) {
    const {value} = e.target;
    setTypedWords(value);
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter(word => word !== "").length;
  }

  function startGame() {
    setRunTimer(true);
    setTime(STARTING_TIME);
    setTypedWords("");
    
  }

  function endGame() {
    setRunTimer(false);
    setWordCount(calculateWordCount(typedWords));
  }

  useEffect(() => {
      if(runTimer && time > 0) {
        inputRef.current.focus();
        setTimeout(() => {
            setTime(times => times - 1)
        }, 1000);
      } else if (time === 0) {
        endGame();

      }
  }, [runTimer, time])

  return (
    <div>
      <h1 className='title'>Speed Typing Game</h1>
      <textarea ref={inputRef} value={typedWords} onChange={handleChange} disabled={!runTimer}/>
      <h1>Time Remaining: {time}</h1>
      <button onClick={startGame} disabled={runTimer}>Start</button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  )
}

export default App;
