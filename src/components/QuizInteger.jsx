"use client";
import { useState, useEffect } from "react";
import "./PostTest.css";
import questions from "../../public/json/question.json";
import ScoreCard from "@/components/ScoreCard";
import PreviousAttempts from "@/components/IntegerAttempts";  // ✅ Import new component

function PostTest(props) {
    const question = questions[0].integer;
    
    const [questionIndex, setQuestionIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [showScore, setScore] = useState(false);
    const [score, setFinalScore] = useState(0);
    const [answerColor, setAnswerColor] = useState("text-white");
    const [questionArray, setQuestionArray] = useState([]);
    const [attemptHistory, setAttemptHistory] = useState([]);
    const [allAttempts, setAllAttempts] = useState([]); // ✅ Store multiple attempts
    
    // Timer State
    const [timeLeft, setTimeLeft] = useState(30);

    useEffect(() => {
        if (timeLeft === 0) {
            handleAutoSubmit(); 
        }

        const timer = setInterval(() => {
            setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    // Handle Answer Submission
    const handleSubmit = () => {
        const el = document.getElementById("input");
        const userAnswer = el.value.trim();
        const correctAnswer = question[questionIndex].answerText;

        if (userAnswer === "") {
            handleAutoSubmit();
            return;
        }

        const isCorrect = userAnswer == correctAnswer;

        setAttemptHistory(prev => [...prev, { 
            question: question[questionIndex].questionText,
            userAnswer,
            correctAnswer,
            isCorrect
        }]);

        if (isCorrect) {
            setFinalScore(score + 1);
            setAnswerColor("text-green-800");
        } else {
            setAnswerColor("text-red-800");
        }
    };

    // Handle Skipping (Next Button)
    const handleSkip = () => {
        const el = document.getElementById("input");
        const userAnswer = el.value.trim();

        if (userAnswer === "") {
            setAttemptHistory(prev => [...prev, { 
                question: question[questionIndex].questionText,
                userAnswer: "Not Attempted",
                correctAnswer: question[questionIndex].answerText,
                isCorrect: null 
            }]);
        }

        nextQue();
    };

    // Auto-submit when time runs out
    const handleAutoSubmit = () => {
        handleSkip();
    };

    // Move to the Next Question
    const nextQue = () => {
        setTimeLeft(30);
        document.getElementById("input").value = "";
        setAnswerColor("text-white");

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion <= question.length) {
            generateQuestion();
            setCurrentQuestion(nextQuestion);
        } else {
            finishTest();
        }
    };

    // Finish Test and Store Attempt History
    const finishTest = () => {
        setScore(true);
        setAllAttempts(prev => [...prev, attemptHistory]); // ✅ Store previous attempts
        setAttemptHistory([]); // Reset current attempt history
    };

    // Restart Quiz
    const restart = () => {
        setScore(false);
        setCurrentQuestion(1);
        setFinalScore(0);
        setQuestionIndex(0);
        setQuestionArray([]);
        setTimeLeft(30);
    };

    // Generate Random Question Index
    const generateQuestion = () => {
        const length = question.length - 1;
        const ind = Math.floor(Math.random() * length) + 1;

        if (questionArray.includes(ind)) {
            return generateQuestion();
        } else {
            setQuestionArray([...questionArray, ind]);
            setQuestionIndex(ind);
        }
    };

    return (
        <div className="main flex-col md:flex-row">
            <div className="appTest bg-inherit h-full text-center mt-4">
                {showScore ? (
                    <ScoreCard restart={restart} score={score} totalQuestions={question.length} />
                ) : (
                    <div className="space-between w-full h-[100%]">
                        <div className="question-section md:text-lg my-5 text-center">
                            <button className="w-max float-left p-2 bg-[#001E25] rounded-md hover:opacity-50" onClick={() => props.setIntegerQuiz(false)}>Back</button>
                            
                            <div className="flex justify-between items-center bg-[#0c122b] md:p-2 p-1 rounded-xl md:w-[90%]">
                                <span>Question {currentQuestion}/{question.length}</span>
                                <span className="text-red-500">⏳ {timeLeft}s</span>
                            </div>

                            <div className="question-text text-justify font-semibold">{question[questionIndex].questionText}</div>
                        </div>

                        <div className="answer-section">
                            <input onChange={() => setAnswerColor("text-white")} id="input" className={`h-20vh w-full p-2 ${answerColor} rounded-xl bg-[#001E25]`} type="number"></input>
                            <button className="w-max float-left p-2 bg-gray-600 rounded-xl" onClick={handleSubmit}>Submit</button>
                            <button className="float-right w-max p-2 bg-gray-600 rounded-xl" onClick={handleSkip}>Next</button>
                        </div>
                    </div>
                )}
            </div>

            {/* Display Previous Attempts */}
            {/* <PreviousAttempts attempts={allAttempts} /> */}
        </div>
    );
}

export default PostTest;
