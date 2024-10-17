import React, { createContext, useState } from 'react';
import questionService from '../services/questionService';

export const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const [currentQuestion, setCurrentQuestion] = useState(questionService.getFirstQuestion());
  const [isFinal, setIsFinal] = useState(false);
  const [position, setPosition] = useState({ top: "50%", left: "50%" });

  const handleAnswer = (answer) => {
    if (answer === "Não!") {
      setPosition({
        top: `${Math.random() * 80}vh`, 
        left: `${Math.random() * 80}vw`, 
      });
      return; 
    }

    const nextQuestion = questionService.getNextQuestion(answer);
    
  
    if (nextQuestion === "move") {
      return;
    }

    
    if (nextQuestion) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsFinal(true); 
    }
  };

  return (
    <QuestionContext.Provider value={{ currentQuestion, handleAnswer, isFinal, position }}>
      {children}
    </QuestionContext.Provider>
  );
};
