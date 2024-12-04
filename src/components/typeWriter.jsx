import React, { useEffect } from "react";
import style from "../modules/typeWriter.module.css";
import Typewriter from "typewriter-effect/dist/core";

function TypeWriter() {
	useEffect(() => {
		var app = document.getElementById("text");

		var typewriter = new Typewriter(app, {
			loop: false,
			delay: 75,
		});

		typewriter
			.typeString("< Karsten Verherstraeten >")
			.start();
	}, []);

	return <div id="text" className={style.Text}></div>;
}

export default TypeWriter;
