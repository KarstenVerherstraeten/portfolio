import style from "../modules/contact.module.css";
import React, { useState } from "react";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [response, setResponse] = useState("");

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await fetch("https://portfolio-mhiy.onrender.com/send", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			const data = await res.text();
			setResponse(data);
		} catch (error) {
			setResponse("Error sending email");
		}
	};
	return (
		<div id="Contact" className={style.contact}>
			<div className={style.Title}>
			<h2>Contact</h2>
			</div>

			<form onSubmit={handleSubmit}>
				<div className={style.form}>
					<div className={style.left}>
						<input
							type="text"
							name="name"
							placeholder="Your Name"
							onChange={handleChange}
							required
						/>
						<input
							type="email"
							name="email"
							placeholder="Your Email"
							onChange={handleChange}
							required
						/>
					</div>

					<div className={style.right}>
						<textarea
							name="message"
							placeholder="Your Message"
							onChange={handleChange}
							required
						></textarea>
					</div>
				</div>
				<button type="submit">
					Send{" "}
					<i
						className="fa fa-paper-plane"
						aria-hidden="true"
						style={{ color: "#000000" }}
					></i>
				</button>
			</form>
			{response && <p className={style.response}>{response}</p>}
		</div>
	);
};

export default ContactForm;
