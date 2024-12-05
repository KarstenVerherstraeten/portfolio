import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import style from "../modules/details.module.css";


function DetailedView() {
	const { id } = useParams();
	const [project, setProject] = useState(null);
	const [skillsData, setSkillsData] = useState([]);
	const [showFullDescription, setShowFullDescription] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0); // Carousel state

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
			.catch((error) => console.error("Error loading projects JSON:", error));

		fetch("/skills.json")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((data) => {
				setSkillsData(data);
			})
			.catch((error) => console.error("Error loading skills JSON:", error));
	}, [id]);

	if (!project) {
		return <p>Loading...</p>;
	}

	const matchedSkills = project.skills.map((skillName) => {
		const trimmedName = skillName.trim().replace(",", "");
		return (
			skillsData.find(
				(skill) => skill.name.toLowerCase() === trimmedName.toLowerCase()
			) || {
				name: trimmedName,
				image: "/defaultIcon.svg",
			}
		);
	});

	const toggleDescription = () => setShowFullDescription((prev) => !prev);

	// Carousel logic
	const nextImage = () => {
		setCurrentImageIndex(
			(prevIndex) => (prevIndex + 1) % project.images.length
		);
	};

	const prevImage = () => {
		setCurrentImageIndex(
			(prevIndex) =>
				(prevIndex - 1 + project.images.length) % project.images.length
		);
	};

	const projectImagePath = (image) => {
		try {
			return require(`../assets/ProjectBanners/${image}`);
		} catch (error) {
			console.error("Image not found:", image);
			return require("../assets/ProjectBanners/placeholder.png");
		}
	}; // Use `.default` to resolve images correctly

	return (
		<>
			
			<div className={style.DetailedView}>
				
				<div className={style.back}>
					<Link to="/">
					<button >
						<i className="fa-solid fa-arrow-left" style={{ color: "#74c5bc" }}></i>{" "}
						Back
					</button>
					</Link>
				</div>
				<div className={style.detailsWrapper}>
					<div className={style.left}>
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
								<div className={style.group}>
									<p>
										<i
											className="fa-solid fa-user-group"
											style={{ color: "#74c5bc" }}
										></i>
										{project.GroupSize}
									</p>
								</div>

								<div className={style.role}>
									<p>
										<i
											className="fa-solid fa-code"
											style={{ color: "#74c5bc" }}
										></i>
										{project.role}
									</p>
								</div>
							</div>
						</div>

						<p className={style.details}>
							{showFullDescription
								? project.description
								: `${project.description.slice(0, 300)}...`}{" "}
						</p>
						<button
							className={style.viewMoreButton}
							onClick={toggleDescription}
						>
							{showFullDescription ? "View Less" : "View More"}{" "}
						</button>

						<a
							className={style.gitURL}
							href={project.githubLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							View project on GitHub
						</a>
					</div>
					<div className={style.right}>
						{/* Custom Image Carousel */}
						<div className={style.carousel}>
							<button className={style.prevButton} onClick={prevImage}>
								&#8249;
							</button>
							<img
								src={projectImagePath(project.images[currentImageIndex])}
								alt={`${project.name} image ${currentImageIndex + 1}`}
								className={style.projectImage}
							/>
							<button className={style.nextButton} onClick={nextImage}>
								&#8250;
							</button>
						</div>
					</div>
				</div>
				<div className={style.skills}>
					<h3>Skills Used</h3>
					<ul>
						{matchedSkills.map((skill) => (
							<li key={skill.name} className={style.skillItem}>
								<img
									src={skill.image}
									alt={skill.name}
									className={style.skillIcon}
								/>
								<span>{skill.name}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}

export default DetailedView;
