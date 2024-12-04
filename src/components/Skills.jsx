import React, { useState, useEffect } from "react";
import style from "../modules/skills.module.css";


function Skills() {
  const [skills, setSkills] = useState([]); // Holds fetched skills data
  const [searchTerm, setSearchTerm] = useState(""); // For skill search
  const [visibleSkills, setVisibleSkills] = useState(10); // Number of visible skills

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

  // Filter and sort skills
  const filteredSkills = skills
    .filter((skill) =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => b.level - a.level); // Level High to Low

  const handleShowMore = () => {
    setVisibleSkills((prevVisibleSkills) => prevVisibleSkills + 10);
  };

  const handleShowLess = () => {
    setVisibleSkills(10);
  };

  return (
    <div id="Skills" className={style.Skills}>
      <div className={style.Title}>
        <p>Skills</p>
      </div>
      <div className={style.Search}>
        <div className={style.FilterBox}>
          <label htmlFor="search">Search: </label>
          <input
            type="text"
            id="search"
            className={style.SearchInput}
            placeholder="Search for a skill..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className={style.skillList}>
        {filteredSkills.slice(0, visibleSkills).map((skill, index) => (
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
                    className={`${style.skillBar} ${
                      i < skill.level ? style.filled : style.unfilled
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredSkills.length > 10 && (
        <div className={style.showMore}>
          {visibleSkills < filteredSkills.length ? (
            <button onClick={handleShowMore}>Show More</button>
          ) : (
            <button onClick={handleShowLess}>Show Less</button>
          )}
        </div>
      )}
    </div>
  );
}

export default Skills;