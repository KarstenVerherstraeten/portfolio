import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "../modules/projects.module.css";

function Projects() {
	const [projects, setProjects] = useState([]);
	const [visibleProjects, setVisibleProjects] = useState(6);
	const [showMore, setShowMore] = useState(true);

	useEffect(() => {
		fetch("/projects.json")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((data) => {
				setProjects(data);
			})
			.catch((error) => console.error("Error loading JSON:", error));
	}, []);

	const toggleProjects = () => {
		if (showMore) {
			setVisibleProjects(projects.length);
		} else {
			setVisibleProjects(6);
		}
		setShowMore(!showMore);
	};

	return (
		<div id="Projects" className={style.Projects}>
			<div className={style.Title}>
			<h2>Projects</h2>
			</div>

			<div className={style.ProjectCards}>
			{projects.slice(0, visibleProjects).map((project, index) => {
				// Dynamically import the image
				const projectImage = project.image
					? require(`../assets/ProjectBanners/${project.image}`)
					: require("../assets/ProjectBanners/placeholder.png");

				return (
					<Link
						to={`/detailedView/${project.id}`}
						className={style.projectLink}
						key={index}
					>
						<div className={style.Project}>
							<img src={projectImage} alt={project.name} />
							<p>{project.name}</p>
							<p>{project.codeLanguage}</p>
							<p>{project.year}</p>
						</div>
					</Link>
				);
			})}
			</div>
			
			<div>
			<button id="projecButton" onClick={toggleProjects}>
				{showMore ? "Show more" : "Show less"}
			</button>
			</div>
			
		</div>
	);
}

export default Projects;
