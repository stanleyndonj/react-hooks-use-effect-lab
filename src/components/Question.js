import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);
  useEffect(() => {

    const timerId = setTimeout(() => {
      
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    if (timeRemaining === 0) {

      setTimeRemaining(10);
      onAnswered(false);
    }

    return () => clearTimeout(timerId);

  
  }, [timeRemaining, onAnswered]);


  function handleAnswer(isCorrect) {
    
    setTimeRemaining(10);
    
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {/* Render each answer as a button */}
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex; 
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      {/* Display the remaining time */}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;