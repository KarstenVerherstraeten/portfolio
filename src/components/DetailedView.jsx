import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./navbar";
import style from "../modules/details.module.css";

function DetailedView() {
	const { id } = useParams();
	const [project, setProject] = useState(null);

	useEffect(() => {
		fetch("/projects.json")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((data) => {
				const foundProject = data.find((proj) => proj.id === parseInt(id, 10));
				setProject(foundProject);
			})
			.catch((error) => console.error("Error loading JSON:", error));
	}, [id]);

	if (!project) {
		return <p>Loading...</p>;
	}

	return (
		<>
			<Navbar />

			<div className={style.DetailedView}>
				<div className={style.top}>
					<h2 className={style.Title}>{project.name}</h2>

					<div className={style.info}>
                    <div className={style.date}>
						<p>
							<i
								className="fa-regular fa-calendar-days"
								style={{ color: "#74c5bc" }}
							></i>{" "}
							{project.from} - {project.to}
						</p>
					</div>
					<p>
						<i
							className="fa-solid fa-user-group"
							style={{ color: "#74c5bc" }}
						></i>
						{project.GroupSize}
					</p>
                    </div>
					
				</div>

				<p className={style.details}>{project.description}</p>
				<a
					className={style.gitURL}
					href={project.githubLink}
					target="_blank"
					rel="noopener noreferrer"
				>
					view project on github
				</a>
			</div>
		</>
	);
}

export default DetailedView;
