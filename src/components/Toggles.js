import React, { useState, useEffect } from "react";
import Toggle from "./Toggle";
import { questionsData, questionTitle } from "../questionsData";

// Pass prop to notify of background colour change when all options are correctly selected
const Toggles = ({ onAllCorrectChange }) => {
  //Initialise null state for all questions
  const [selectedOptions, setSelectedOptions] = useState(
    questionsData.reduce((acc, question) => {
      acc[question.id] = null;
      return acc;
    }, {})
  );

  // Check is all users answers are correct
  const allCorrect = Object.keys(selectedOptions).every(
    (key) =>
      // Users selected option: 'opeion1' etc
      //Find correctOption and see if match
      selectedOptions[key] ===
      questionsData.find((q) => q.id === Number(key)).correctOption
  );

  // Store only "option1" or "option2" (not "1-option1") to be able to compare to correctOption
  // Update SelectedOptions with user's selected option
  const handleOptionChange = (questionId, selectedOptionId) => {
    const selectedOption = selectedOptionId.split("-")[1];

    setSelectedOptions((prevState) => ({
      ...prevState,
      [questionId]: selectedOption,
    }));
  };

  useEffect(() => {
    onAllCorrectChange(allCorrect);
  }, [allCorrect, onAllCorrectChange]);

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
      {allCorrect ? (
        <p className="toggles-answer">The answer is correct!</p>
      ) : (
        <p className="toggles-answer">The answer is incorect</p>
      )}
    </div>
  );
};

export default Toggles;
