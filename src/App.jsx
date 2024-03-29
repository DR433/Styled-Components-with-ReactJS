// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Contacts from "./Contacts";
import Home from "./Home";
import Services from "./Services";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorPage from "./ErrorPage";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
	const theme = {
		colors: {
			heading: "#18181d",
			text: "rgb(24, 24, 29)",
			white: "#fff",
			black: " #212529",
			helper: "#8490ff",
			bg: "rgb(249, 249, 255)",
			top: "#3b3be9",
			footer_bg: "#0a1435",
			btn: "rgb(98, 84, 243)",
			border: "rgba(98, 84, 243, 0.5)",
			hr: "#ffffff",
			gradient: "linear-gradient(0deg, rgb(132, 144, 255) 0%, rgb(98, 189, 252) 100%)",
			shadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
			shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
		},
		media: { mobile: "768px", tab: "998px" },
	};
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Router>
					<Header />
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/about" element={<About />}></Route>
						<Route path="/contacts" element={<Contacts />}></Route>
						<Route path="/services" element={<Services />}></Route>
						<Route path="*" element={<ErrorPage />}></Route>
					</Routes>
					<Footer />
				</Router>
			</ThemeProvider>
		</>
	);
}

export default App;
