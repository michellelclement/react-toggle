import React from "react";

const Toggle = () => {
  return (
    <div className="toggle">
      <input
        type="radio"
        className="toggle-option toggle-start"
        id="option1"
        name="toggle-option"
      />
      <label htmlFor="option1">Option 1</label>
      <input
        type="radio"
        className="toggle-option toggle-end"
        id="option2"
        name="toggle-option"
      />
      <label htmlFor="option2">Option 2</label>
      <div className="toggle-option-slider"></div>
    </div>
  );
};

export default Toggle;
