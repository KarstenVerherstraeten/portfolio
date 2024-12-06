import style from "../modules/introduction.module.css";

function Introduction() {
	return (
		<div id="AboutMe" className={style.Introduction}>
			<div className={style.Title}>
				<p>About me</p>
			</div>

			<div className={style.Content}>
				<div>
					<div className={style.Text}>
						<p>
							I have a deep passion for coding, technology, and all things
							related to the digital world. My enthusiasm for innovation drives
							me to continuously explore new advancements and trends in tech.
						</p>
					</div>
					<div className={style.Text}>
						<p>
							Whether it’s learning new programming languages, working on
							creative projects, or staying up-to-date with the latest
							developments, I am always eager to expand my knowledge and skills
							in this ever-evolving field.
						</p>
					</div>
					<div className={style.Text}>
						<p>
							In my free time, I proudly embrace my inner nerd. Whenever I have
							a moment to spare, you’ll most likely find me gaming, diving into
							virtual worlds and exploring new challenges. I try to squeeze in
							as much gaming as possible, though I do take occasional breaks to
							enjoy movies or series.
						</p>
					</div>
				</div>

				<div className={style.Side}>
					<div className={style.sidePiece}>
						<p>Personal Projects</p>
						<ul>
							<li>RateScout</li>
							<li>Fortnite UEFN</li>
						</ul>
					</div>
					<div className={style.sidePiece}>
						<p>Professional Platforms</p>
						<ul>
							<li>
								<a
									href="https://www.linkedin.com/in/karsten-verherstraeten-4a329a26b/"
									target="_blank"
									rel="noreferrer"
									title="LinkedIn"
								>
									LinkedIn
								</a>
							</li>
							<li>
								<a
									href="https://github.com/KarstenVerherstraeten"
									target="_blank"
									rel="noreferrer"
									title="GitHub"
								>
									GitHub
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Introduction;
