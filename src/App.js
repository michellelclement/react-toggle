import React, { useState } from "react";
import Toggles from "./components/Toggles";
import "./styles/app.scss";

function App() {
  // Track progress of correct answers (0 to 100)
  // Set initial value of progress to 0
  const [progress, setProgress] = useState(0);

  return (
    <div
      className={`app ${
        progress === 100 ? "app--turquoise" : progress >= 50 ? "app--peach" : ""
      }`}
    >
      <Toggles onProgressChange={setProgress} />
    </div>
  );
}

export default App;
