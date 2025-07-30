import React, { useState } from 'react';

const App = () => {
  const [openIndex, setOpenIndex] = useState(null); // null = nothing open

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // same item clicked again → close it
    } else {
      setOpenIndex(index); // open the clicked one
    }
  };

  const faqList = [
    { question: "What is React?", answer: "React is a JavaScript library for building UI." },
    { question: "What is useState?", answer: "useState is a React Hook for managing state." },
    { question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript used in React." },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">❓ FAQ Accordion - Multiple with if else</h1>

      <div className="w-full max-w-2xl space-y-4">
        {faqList.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h2 className="text-lg font-semibold text-gray-800">Q{index + 1}: {faq.question}</h2>

            {openIndex === index ? (
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
