import React, { useState } from "react";
import Toggle from "./Toggle";
import questionsData from "../questionsData";

const Toggles = () => {
  //Initialise null state for all questions
  const [selectedOptions, setSelectedOptions] = useState(
    questionsData.reduce((acc, question) => {
      acc[question.id] = null;
      return acc;
    }, {})
  );

  const allCorrect = Object.keys(selectedOptions).every(
    (key) =>
      selectedOptions[key] ===
      questionsData.find((q) => q.id === Number(key)).correctOption
  );

  // Store only "option1" or "option2" (not "1-option1") to be able to compare to correctOption
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
      {allCorrect ? (
        <p>The answer is correct!</p>
      ) : (
        <p>All answer is inccorect correct</p>
      )}
    </div>
  );
};

export default Toggles;
