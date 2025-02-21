

import { getAttempts } from "@/IndexedDB";


export default function AttemptedQuestions({ attempts,setShowAttempts }) {
  // const data= getAttempts();
  // console.log("indexed data",data)
  return (
    <div className="max-w-4xl mx-auto p-6 bg-black text-white rounded-lg shadow-lg mt-10">
      <button  className="p-2 m-auto  hover:opacity-50 bg-[#252d4a] rounded-xl w-max float-left" onClick={() => setShowAttempts(false)}>Back</button>
      <h2 className="text-2xl font-bold text-center">Quiz Attempts</h2>

      <div className="mt-6 space-y-10">
        {attempts.map((attempt, attemptIndex) => (
          <div key={attemptIndex} className="p-5 border border-gray-600 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-white">
              Attempt {attemptIndex + 1}
            </h3>

            <div className="mt-4 space-y-6">
              {attempt.questions.map((q, index) => (
                <div key={index} className="p-4 border border-gray-500 rounded-lg shadow-sm">
                  <p className="text-lg font-semibold text-white">
                    Q{index + 1}: {q.questionText}
                  </p>

                  <div className="mt-3 space-y-2">
                    {q.answersOptions.map((option, idx) => {
                      const isCorrectAnswer = option.isCorrect;
                      const isGivenAnswer = option.answerText === q.given;
                      const bgColor = isGivenAnswer
                        ? q.isCorrect
                          ? "bg-green-700 text-white border-green-500" // Correct answer given ✅
                          : "bg-red-700 text-white border-red-500" // Incorrect answer given ❌
                        : isCorrectAnswer
                        ? "bg-green-700 text-white border-green-500" // Show correct answer
                        : "bg-gray-900 text-gray-300 border-blue-500"; // Other options

                      return (
                        <div
                          key={idx}
                          className={`p-3 rounded-lg border ${bgColor} hover:opacity-80 transition`}
                        >
                          {option.answerText}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
