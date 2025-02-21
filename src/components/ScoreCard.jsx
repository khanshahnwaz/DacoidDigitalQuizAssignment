"use client";
import { useState } from "react";
// import { BiCheckCircle } from "@heroicons/react/24//solid";
import { BiCheckCircle } from "react-icons/bi";
BiCheckCircle
export default function QuizResults({restart, score, totalQuestions }) {
  const passingScore = 100; // Example: Consider 100% as passing
  const passingPoints = totalQuestions; // Each question = 1 point

  const scorePercentage = (score / totalQuestions) * 100;
  const passed = scorePercentage >= passingScore;

  return (
    <div className="flex flex-col items-center bg-[#001E25] p-6 rounded-lg shadow-lg w-full max-w-md mx-auto ">
      <h2 className="text-2xl font-bold text-gray-400">Quiz Results</h2>

      <BiCheckCircle className="w-16 h-16 text-green-600 mt-4" />
      <p className="text-lg text-gray-600 mt-2">
        {passed ? "Nice job, you passed!" : "Better luck next time!"}
      </p>

      <div className="flex justify-center mt-6 gap-6">
        <div className="text-center p-4 border rounded-lg shadow-md w-32">
          <p className="text-gray-500 text-sm font-semibold">YOUR SCORE</p>
          <p className="text-2xl font-bold text-green-700">{scorePercentage}%</p>
          <p className="text-xs text-gray-500">PASSING SCORE: {passingScore}%</p>
        </div>

        <div className="text-center p-4 border rounded-lg shadow-md w-32">
          <p className="text-gray-500 text-sm font-semibold">YOUR POINTS</p>
          <p className="text-2xl font-bold text-green-700">{score}</p>
          <p className="text-xs text-gray-500">PASSING POINTS: {passingPoints}</p>
        </div>
      </div>

      <button onClick={restart} className="mt-6 bg-[#6418c3] text-white px-4 py-2 rounded-lg hover:bg-[#6418c3] ransition">
        Restart Quiz
      </button>
    </div>
  );
}
