import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import DetailedView from "./components/DetailedView";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/detailedView/:id" element={<DetailedView />} />{" "}
			</Routes>
		</Router>
	);
}

export default App;
