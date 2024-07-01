import { useState } from "react";
import "./App.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);

  return (
    <div className="app">
      <div className="editor"></div>
      <div className="form-container"></div>
    </div>
  );
}

export default App;
