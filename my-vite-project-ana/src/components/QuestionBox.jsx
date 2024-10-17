import React, { useContext } from 'react';
import { QuestionContext } from '../contexts/QuestionContext';
import styles from './QuestionBox.module.css';

const QuestionBox = () => {
  const { currentQuestion, handleAnswer, position } = useContext(QuestionContext);

  return (
    <div 
      className={styles.questionBox} 
      style={{ position: 'absolute', top: position.top, left: position.left, transform: 'translate(-50%, -50%)' }} 
    >
      <p>{currentQuestion.text}</p>
      <div>
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className={styles.answerButton}
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionBox;
