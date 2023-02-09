import { useState, useEffect, useRef } from "react";

function useWordGame(startingTime = 10) {
  const [typedWords, setTypedWords] = useState("");
  const [time, setTime] = useState(startingTime);
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
    setTime(startingTime);
    setTypedWords("");
    // inputRef.current.disabled = false;
    // inputRef.current.focus();
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
  }, [runTimer, time]);

  return {inputRef, handleChange, typedWords, runTimer, time, startGame, wordCount};
}

export default useWordGame;
