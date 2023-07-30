import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import data from '../data/data.json';

interface Question {
  question: string;
  answers: string[];
  correctAnswer: number;
}

const Game: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (answerIndex: number) => {
    if (answerIndex === data[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const history=useHistory();

  const handleGoBack = () => {
    history.push('/');
  };

  return (
    <div className='home'>
    <div className="game">
      {showScore ? (
        <div className="score-section">
          <h2>You scored {score} out of {data.length}</h2>
          <button onClick={handleGoBack}>Home</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{data.length}
            </div>
            <div className="question-text">{data[currentQuestion].question}</div>
          </div>
          <div className="answer-section">
            {data[currentQuestion].answers.map((answer, index) => (
              <button
                key={index}
                className="answer-button"
                onClick={() => handleAnswerOptionClick(index)}
              >
                {answer}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
    </div>
  );
};

export default Game;
