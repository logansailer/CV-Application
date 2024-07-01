import { useState } from "react";
import "./App.css";
import AddPersonalDetails from "./components/personal-info/PersonalDetails"
import AddEducationSection from "./components/education/AddEducationSection";
import AddExpereinceSection from "./components/experience/AddExperienceSection";

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
