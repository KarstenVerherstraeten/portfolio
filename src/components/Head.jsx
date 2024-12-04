import React, { useState, useEffect } from "react";
import style from "../modules/typeWriter.module.css";
import TypeWriter from "./typeWriter";

const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

function Head() {
	const [currentImage, setCurrentImage] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage((prevImage) => (prevImage + 1) % images.length);
		}, 3000);

		return () => clearInterval(interval); // Cleanup interval on component unmount
	}, []);

	return (
		<div className={style.header}>
			<TypeWriter />
			<div className={style.IntroText}>
				<p>I am a highly motivated 21-year-old student currently enrolled <br /> at
					Erasmushogeschool Brussel, pursuing  a Bachelors degree<br /> in Multimedia &
					Creative Technologies.</p>
			</div>

			<div className={style.buttons}>
				<a href="#Projects"><button>Projects</button></a>
				<a href="#AboutMe"><button>About me</button></a>
				
			</div>
		</div>
	);
}

export default Head;
