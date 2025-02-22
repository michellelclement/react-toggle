import React, { useState, useEffect } from "react";

const Toggle = ({ option1, option2, toggleId, onOptionChange, isLocked }) => {
  const [isStacked, setIsStacked] = useState(false);

  useEffect(() => {
    const maxCharLimit = 15; // Adjust this as needed
    if (
      option1.text.length > maxCharLimit ||
      option2.text.length > maxCharLimit
    ) {
      setIsStacked(true);
    }
  }, [option1.text, option2.text]);

  // Handle the change when a user selects a radio button
  const clicked = (e) => {
    if (!isLocked) {
      onOptionChange(toggleId, e.target.id);
    }
  };

  return (
    <div className={`toggle ${isLocked ? "toggle--locked" : ""}`}>
      <div
        className={`toggle-container ${
          isStacked ? "toggle-container--stacked" : ""
        }`}
      >
        <input
          type="radio"
          className="toggle-option toggle-start"
          id={`${toggleId}-option1`}
          name={`toggle-${toggleId}`} // Group together radio buttons per question
          onChange={clicked}
          disabled={isLocked} // Disable when locked
        />
        <label htmlFor={`${toggleId}-option1`}>{option1.text}</label>
        <input
          type="radio"
          className="toggle-option toggle-end"
          id={`${toggleId}-option2`}
          name={`toggle-${toggleId}`}
          onChange={clicked}
          disabled={isLocked}
        />
        <label htmlFor={`${toggleId}-option2`}>{option2.text}</label>

        <div className="toggle-option-slider"></div>
      </div>
    </div>
  );
};

export default Toggle;
