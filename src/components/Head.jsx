import style from "../modules/typeWriter.module.css";
import TypeWriter from "./typeWriter";

function Head() {
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
