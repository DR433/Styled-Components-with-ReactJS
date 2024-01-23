// import React from "react";
import Hero from "./components/hero";
import { useGlobalContext } from "./context/UseGlobalContext";

const Home = () => {
	const { homePageHero } = useGlobalContext().pageValues;

	return (
		<section className="container hero-section">
			<Hero {...homePageHero} />
		</section>
	);
};

export default Home;
