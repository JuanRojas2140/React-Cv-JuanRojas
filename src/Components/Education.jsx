import React from "react";
import "./Education.scss";

const Education = ({ education }) => {
  return (
   
      <div className="c__education">
        {education.map((item) => {
          return (
            <div className="c__education-card" key={JSON.stringify(item)}>
              <p className="c__education-card-text">📕{item.name}</p>
              <p className="c__education-card-text">{item.where}</p>
              <p className="c__education-card-text">{item.date}</p>
            </div>
          );
        })}
      </div>
    
  );
};

export default Education;