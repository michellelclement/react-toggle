import React, { useState } from "react";

const Toggle = ({ option1, option2, correctOption }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const clicked = (e) => {
    setSelectedOption(e.target.id);
  };

  return (
    <div className="toggle">
      <div className="toggle__container">
        <input
          type="radio"
          className="toggle-option toggle-start"
          id={option1.id}
          name="toggle-option"
          onChange={clicked}
        />
        <label htmlFor={option1.id}>{option1.text}</label>
        <input
          type="radio"
          className="toggle-option toggle-end"
          id={option2.id}
          name="toggle-option"
          onChange={clicked}
        />
        <label htmlFor="option2">{option2.text}</label>
      </div>

      <div className="toggle-option-slider"></div>

      {/* <p>
        {selectedOption === correctOption
          ? "Correct Answer"
          : "Incorrect sorry!"}
      </p> */}
    </div>
  );
};

export default Toggle;
