import React from "react";
import Toggle from "./Toggle";
import questionsData from "../questionsData";

const Toggles = () => {
  return (
    <div className="toggles">
      {questionsData.map((question) => (
        <Toggle
          key={question.id}
          option1={question.option1} // Pass the entire option1 object
          option2={question.option2} // Pass the entire option2 object
          correctOption={question.correctAnswer} // Pass correct answer
        />
      ))}
    </div>
  );
};

export default Toggles;
