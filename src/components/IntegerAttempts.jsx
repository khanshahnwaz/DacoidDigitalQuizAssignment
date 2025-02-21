

const PreviousAttempts = ({ attempts,setShowIntegerAttempts }) => {
    if (attempts.length === 0) {
        return <p className="text-center text-gray-500">No previous attempts found.</p>;
    }
console.log("Attempts ",attempts)
    return (
        <div className="max-w-4xl mx-auto p-6 bg-black text-white rounded-lg shadow-lg mt-10">
      <button  className="p-2 m-auto  hover:opacity-50 bg-[#252d4a] rounded-xl w-max float-left" onClick={() => setShowIntegerAttempts(false)}>Back</button>
      <h2 className="text-2xl font-bold text-center">Quiz Attempts</h2>

      <div className="mt-6 space-y-10">
            {attempts.map((attemptSet, attemptIndex) => (
                <div key={attemptIndex} className="p-5 border border-gray-600 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-white">
                  Attempt {attemptIndex + 1}
                </h3>
                    <ul className="mt-2">
                        {attemptSet.questions.map((attempt, index) => (
                            <li key={index} className={`p-2 mb-2 rounded-md ${
                                attempt.isCorrect === true ? "bg-green-500" :
                                attempt.isCorrect === false ? "bg-red-500" :
                                "bg-[#252d4a]" // Not Attempted
                            }`}>
                                <strong>Q:</strong> {attempt.questionText} <br />
                                <strong>Your Answer:</strong> {attempt.userAnswer} <br />
                                <strong>Correct Answer:</strong> {attempt.correctAnswer}
                            </li>
                        ))}
                    </ul>
                    </div>
        ))}
      </div>
    </div>
  );
}


export default PreviousAttempts;
