import React, { useState, useEffect } from 'react';
import { QuestionData } from './types';

const QuestionGame: React.FC = () => {
  const [questionData, setQuestionData] = useState<QuestionData | null>(null);
  const [userChoice, setUserChoice] = useState<string | null>(null);

  useEffect(() => {
    // Load the JSON data
    fetch('/data.json')
      .then(response => response.json())
      .then((data: QuestionData) => setQuestionData(data))
      .catch(error => console.error('Error loading data:', error));
  }, []);

  if (!questionData) {
    return <div>Loading...</div>;
  }

  const handleChoice = (answer: string) => {
    setUserChoice(answer);
  };

  return (
    <div>
      <h1>{questionData.question}</h1>
      <button onClick={() => handleChoice(questionData.answers[0])}>Yes</button>
      <button onClick={() => handleChoice(questionData.answers[1])}>No</button>
      {userChoice && <p>{userChoice}</p>}
    </div>
  );
};

export default QuestionGame;
