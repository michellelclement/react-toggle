import React, { useState } from "react";

//Import components
import Toggles from "./components/Toggles";

//Import styles
import "./styles/app.scss";

function App() {
  // Track progress of correct answers as a percentage
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
