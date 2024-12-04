import { React } from "react";
import Navbar from "./navbar";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Head from "./Head";

function Home() {
	return (
		<>
			<Navbar />
            <Head />
			<Projects />
			<Skills />
			<Introduction />
			<Contact />
			<Footer />
		</>
	);
}

export default Home;
