import React, { useState, useEffect } from "react";
import Toggle from "./Toggle";
import { questionsData, questionTitle } from "../questionsData";

const Toggles = ({ onProgressChange }) => {
  // Creates an object where each question ID is initially set to null
  const [selectedOptions, setSelectedOptions] = useState(
    questionsData.reduce((acc, question) => {
      acc[question.id] = null;
      return acc;
    }, {})
  );

  // Loop through selectedOptions and check if user's answer matches correct answer
  const correctCount = Object.keys(selectedOptions).filter(
    (key) =>
      selectedOptions[key] ===
      questionsData.find((q) => q.id === Number(key)).correctOption
  ).length;

  // Calculate percentage progress (how many answers are correct out of total)
  // Set isLocked if 100% of answers are correct
  const progress = (correctCount / questionsData.length) * 100;
  const isLocked = progress === 100;

  // Notify App.js whenever progress updates (to change background color)
  useEffect(() => {
    onProgressChange(progress);
  }, [progress, onProgressChange]);

  // Update the selected answer when a user clicks an option
  const handleOptionChange = (questionId, selectedOptionId) => {
    if (isLocked) return;

    const selectedOption = selectedOptionId.split("-")[1]; // Extract 'option1' from '1-option1' etc
    setSelectedOptions((prevState) => ({
      ...prevState, // Keep previous state values
      [questionId]: selectedOption, // Update only the changed question
    }));
  };

  return (
    // Loop through question data and render a toggle for each question
    // Pass down current selected option
    // Pass handleOptionChange so Toggle.js can call it when user selects an option
    // Pass down percentage correct value via isLocked
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
          isLocked={isLocked}
        />
      ))}

      {/* Show message if all answers are correct or not based on value of progress */}
      {progress === 100 ? (
        <p className="toggles-answer">The answer is correct!</p>
      ) : (
        <p className="toggles-answer">The answer is incorrect</p>
      )}
    </div>
  );
};

export default Toggles;
