import React, { useState } from "react";

//Import components
import Toggles from "./components/Toggles";
import Toggle from "./components/Toggle";

//Import styles
import "./styles/app.scss";

function App() {
  const [allCorrect, setAllCorrect] = useState(false);

  return (
    <div className={`app ${allCorrect ? "app--turquoise" : ""}`}>
      <Toggles onAllCorrectChange={setAllCorrect} />
    </div>
  );
}

export default App;
