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
				<p>Projects</p>
			</div>

			<table>
				<tr>
					<th>Project</th>
					<th>Language</th>
					<th>Year</th>
					<th>Details</th>
				</tr>

				{projects.slice(0, visibleProjects).map((project, index) => (
					<tr key={index}>
						<td>{project.name}</td>
						<td>{project.codeLanguage}</td>
						<td>{project.year}</td>
						<td>
							<Link to={`/detailedView/${project.id}`} className={style.projectLink}>Show More</Link>
						</td>
					</tr>
				))}
			</table>

			<button onClick={toggleProjects}>
				{showMore ? "Show more" : "Show less"}
			</button>
		</div>
	);
}

export default Projects;
