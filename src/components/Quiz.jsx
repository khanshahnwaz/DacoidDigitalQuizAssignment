"use client";
import { useState, useEffect } from "react";
import "./PostTest.css";
import questions from "../../public/json/question.json";
import data from "../../public/json/data.json"
import ScoreCard from "./ScoreCard"
import { saveAttempt } from "@/IndexedDB";

function PostTest(props) {
  const question = questions[0].mcq;
  const attempted = data.done;
  const [attempts, setAttempts] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [showScore, setScore] = useState(false);
  const [score, setFinalScore] = useState(0);
  const [attemptRecords, setAttemptRecords] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30); // Timer for each question

  // Timer Effect
  useEffect(() => {
    if (timeLeft === 0) {
      nextQue(); // Auto move to next question when timer reaches 0
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Clear timer when component unmounts or changes
  }, [timeLeft]);

  // Reset Timer when moving to next question
  const resetTimer = () => {
    setTimeLeft(30); // Reset to 30s
  };

  // Handle selected answer
  const handleButtonClick = (isCorrect, event, selectedAnswer) => {
    const btns = document.querySelectorAll(".btn");
    btns.forEach((btn) => (btn.disabled = true));

    if (isCorrect) {
      setFinalScore(score + 1);
      event.target.style.backgroundColor = "rgba(0,255,0,0.5)";
    } else {
      event.target.style.backgroundColor = "rgba(255,0,0,0.7)";
    }

    // Mark correct answer
    question[questionIndex].answersOptions.forEach((value, index) => {
      if (value.isCorrect) {
        document.getElementById(index).style.backgroundColor = "Green";
      }
    });

    // Store attempt in state
    const attempt = {
      question: question[questionIndex].questionText,
      selectedAnswer,
      isCorrect,
    };
    setAttemptRecords([...attemptRecords, attempt]);

    // Move to next question after a delay
    setTimeout(nextQue, 1000);
  };

  // Move to next question
  const nextQue = () => {
    const btns = document.querySelectorAll(".btn");
    btns.forEach((btn) => (btn.disabled = false));

    // Reset button colors
    document.querySelectorAll(".btn").forEach((btn) => {
      btn.style.backgroundColor = "#001E25";
    });

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < question.length) {
      setQuestionIndex(nextQuestion);
      setCurrentQuestion(nextQuestion);
      
      resetTimer(); // Reset timer when moving to next question
    } else {
      setScore(true);
      setAttempts([attemptRecords, ...attempts]);
      // save to indexed db
      // saveAttempt("MCQ Based",attemptRecords)
      console.log("Attempt Records:", attempts);
    }
  };

  // Restart Quiz
  const restart = () => {
    setScore(false);
    setCurrentQuestion(0);
    setFinalScore(0);
    setQuestionIndex(0);
    setAttemptRecords([]);
    resetTimer();
  };

  return (
    <div className="main flex-col md:flex-row">
      <div className="appTest bg-inherit h-full text-center mt-4">
        {showScore ? (
          <ScoreCard restart={restart} score={score} totalQuestions={question.length} />
        ) : (
          <div className="w-full h-[100%]">
            <div className="question-section md:text-lg my-5 text-center">
              <div className={`bg-[#0c122b] md:p-2 p-1 rounded-xl md:w-[90%] text-right`} id="question-count">
                <button className="p-2 m-auto hover:opacity-50 bg-[#252d4a] rounded-xl w-max float-left" onClick={() => props.setQuiz(false)}>Back</button>
                <span>Question {currentQuestion}</span> / {question.length}
                <span className="text-red-500">⏳ {timeLeft}s</span>
              </div>
              <div className="question-text font-semibold text-left">
                {question[questionIndex].questionText}
              </div>
            </div>

            {/* Timer Section
            <div className="timer-section text-center mb-4">
              <span className="text-white text-lg">Time Left: {timeLeft}s</span>
            </div> */}

            {/* Answer Section */}
            <div className="answer-section">
              {question[questionIndex].answersOptions.map((answersOption, index) => (
                <button
                  className="btn"
                  key={index}
                  id={index}
                  onClick={(event) => handleButtonClick(answersOption.isCorrect, event, answersOption.answerText)}
                >
                  {answersOption.answerText}
                </button>
              ))}
              <button id="nxt" onClick={nextQue}>Next</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostTest;
