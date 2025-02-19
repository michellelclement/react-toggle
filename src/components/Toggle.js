import React, { useState } from "react";

const Toggle = ({
  option1,
  option2,
  correctOption,
  toggleId,
  selectedOption,
  onOptionChange,
}) => {
  // Handle the change when a user selects a radio button
  const clicked = (e) => {
    onOptionChange(toggleId, e.target.id);
  };

  return (
    <div className="toggle">
      <div className="toggle__container">
        <input
          type="radio"
          className="toggle-option toggle-start"
          id={`${toggleId}-option1`}
          name={`toggle-${toggleId}`} // Group together radio buttons per question
          onChange={clicked}
        />
        <label htmlFor={`${toggleId}-option1`}>{option1.text}</label>
        <input
          type="radio"
          className="toggle-option toggle-end"
          id={`${toggleId}-option2`}
          name={`toggle-${toggleId}`}
          onChange={clicked}
        />
        <label htmlFor={`${toggleId}-option2`}>{option2.text}</label>

        <div className="toggle-option-slider"></div>
      </div>
      <p>
        {selectedOption === correctOption
          ? "✅ Correct Answer"
          : "❌ Incorrect, try again!"}
      </p>
    </div>
  );
};

export default Toggle;
