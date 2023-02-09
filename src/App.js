import './App.css';
import React from 'react';
import useWordGame from './useWordGame';

function App() {
  const  {
    inputRef, 
    handleChange, 
    typedWords, 
    runTimer, 
    time, 
    startGame, 
    wordCount
  } = useWordGame()

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
