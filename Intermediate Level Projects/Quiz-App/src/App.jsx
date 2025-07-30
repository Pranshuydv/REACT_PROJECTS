import React, { useState } from "react";
import questions from "./data/questions.json";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleNext = () => {
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex === questions.length - 1) {
      setShowScore(true);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }

    setSelectedOption(null);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">🧠 Quiz App</h1>

        {showScore ? (
          <>
            <h2 className="text-2xl font-semibold text-center text-green-600">🎉 Quiz Completed!</h2>
            <p className="text-center mt-4 text-gray-700 text-lg font-medium">
              You scored {score} out of {questions.length}
            </p>
            <div className="mt-6 text-center">
              <button
                onClick={handleRestart}
                className="bg-purple-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-purple-600"
              >
                🔄 Restart Quiz
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Question */}
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-700">
                Q{currentQuestionIndex + 1}: {questions[currentQuestionIndex].question}
              </h2>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedOption(option)}
                  className={`w-full text-left p-3 border rounded-md hover:bg-blue-100 ${selectedOption === option ? "bg-blue-200" : ""
                    }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <div className="mt-6 text-center">
              <button
                onClick={handleNext}
                disabled={selectedOption === null}
                className={`px-6 py-2 rounded-md font-semibold ${selectedOption === null
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
              >
                Next ➡️
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default App;
