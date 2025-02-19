//Import components
import Toggles from "./components/Toggles";
import Toggle from "./components/Toggle";

//Import styles
import "./styles/app.scss";

function App() {
  return (
    <div className="app">
      <h1>Question title</h1>

      <Toggles />
    </div>
  );
}

export default App;
