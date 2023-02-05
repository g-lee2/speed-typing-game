import './App.css';
import React, { useState } from 'react';

function App() {
  const [typedWords, setTypedWords] = useState("");

  function handleChange(e) {
    const {value} = e.target;
    setTypedWords(value);
  }

  return (
    <div>
      <h1 className='title'>Speed Typing Game</h1>
      <textarea value={typedWords} onChange={handleChange}/>
      <h1>Time Remaining: 10</h1>
      <button>Start</button>
      <h1>Word Count: 11</h1>
    </div>
  )
}

export default App;
