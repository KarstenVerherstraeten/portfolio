import React, { useState, useEffect } from "react"; // Import useState and useEffect
import style from "../modules/skills.module.css";

function Skills() {
  const [skills, setSkills] = useState([]); // Initialize state to hold skills data

  useEffect(() => {
    fetch("/skills.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setSkills(data); // Update skills state with fetched data
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <div id="Skills" className={style.Skills}>
      <div className={style.Title}>
        <p>Skills</p>
      </div>

      <div className={style.skillList}>
        {skills.map((skill, index) => (
          <div className={style.skill} key={index}>
            <img className={style.skillImg} src={skill.image} alt={skill.name} />
            <div>
            <div className={style.skillName}>
              <p>{skill.name}</p>
            </div>
            <div className={style.skillLevel}>
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`${style.skillBar} ${i < skill.level ? style.filled : style.unfilled}`}
                />
              ))}
            </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;