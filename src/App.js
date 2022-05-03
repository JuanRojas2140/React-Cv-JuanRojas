import { useState } from "react";
import "./App.scss";
import { CV } from "./CV/CV";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Hero from "./Components/Hero";
import More from "./Components/More";

const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
      <Hero hero={hero} />
      <div className="c__button">
        <button
              className="c__button-btn"
              onClick={() => setShowEducation(true)}
            >
              Education
            </button>
            <button
              className="c__button-btn"
              onClick={() => setShowEducation(false)}
            >
              Experience
            </button>
          </div>
            
            <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
	      <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
        />
    </div>
  );
}

export default App;
