import React, { useState } from "react";

const Toggle = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const correctOption = "option2"; //Set correct option

  const clicked = (e) => {
    setSelectedOption(e.target.id);
  };

  return (
    <div className="toggle">
      <input
        type="radio"
        className="toggle-option toggle-start"
        id="option1"
        name="toggle-option"
        onChange={clicked}
      />
      <label htmlFor="option1">Option 1</label>
      <input
        type="radio"
        className="toggle-option toggle-end"
        id="option2"
        name="toggle-option"
        onChange={clicked}
      />
      <label htmlFor="option2">Option 2</label>
      <div className="toggle-option-slider"></div>

      <p>
        {selectedOption === correctOption
          ? "Correct Answer"
          : "Incorrect sorry!"}
      </p>
    </div>
  );
};

export default Toggle;
