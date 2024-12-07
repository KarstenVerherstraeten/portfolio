import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import DetailedView from "./components/DetailedView";
import PageNotFound from "./components/PageNotFound";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/detailedView/:id" element={<DetailedView />} />{" "}
				<Route path="*" element={<PageNotFound />} /> {/* 404 page */}
			</Routes>
		</Router>
	);
}

export default App;
