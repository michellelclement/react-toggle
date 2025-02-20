import React, { useState, useEffect } from "react";
import Toggle from "./Toggle";
import { questionsData, questionTitle } from "../questionsData";

const Toggles = ({ onProgressChange }) => {
  //Initialise null state for all questions
  const [selectedOptions, setSelectedOptions] = useState(
    questionsData.reduce((acc, question) => {
      acc[question.id] = null;
      return acc;
    }, {})
  );

  // Looop through selectedOoptions and check if user's answer matches correct answer
  const correctCount = Object.keys(selectedOptions).filter(
    (key) =>
      selectedOptions[key] ===
      questionsData.find((q) => q.id === Number(key)).correctOption
  ).length;

  // Calculate percentage progress
  // If user has answered 2 out of 4 questions correctly, count will be 2 correct of 4 questions
  // (2/4) * 100 = 50%
  const progress = (correctCount / questionsData.length) * 100;

  // Pass progress to parent (App.js)
  useEffect(() => {
    onProgressChange(progress);
  }, [progress, onProgressChange]);

  const handleOptionChange = (questionId, selectedOptionId) => {
    const selectedOption = selectedOptionId.split("-")[1];
    setSelectedOptions((prevState) => ({
      ...prevState,
      [questionId]: selectedOption,
    }));
  };

  return (
    // Loop through question data and render a toggle for each question
    // Pass down current selected option
    // Pass handleOptionChange so Toggle.js can call it when user selects an option
    <div className="toggles">
      <h1 className="toggles-question">{questionTitle}</h1>
      {questionsData.map((question) => (
        <Toggle
          key={question.id}
          option1={question.option1}
          option2={question.option2}
          correctOption={question.correctOption}
          toggleId={question.id}
          selectedOption={selectedOptions[question.id]}
          onOptionChange={handleOptionChange}
        />
      ))}

      {/* Show message if all answers are correct or not */}
      {progress === 100 ? (
        <p className="toggles-answer">The answer is correct!</p>
      ) : (
        <p className="toggles-answer">The answer is incorect</p>
      )}
    </div>
  );
};

export default Toggles;
