// import React from 'react'
import styled from "styled-components";
import Hero from "./components/hero";
import PartitionComponents from "./components/PartitionComponents";
import { useGlobalContext } from "./context/UseGlobalContext";

const About = () => {
	const { reactJsSummary, styledComponentSummary, aboutPageReactHero, aboutPageStyleHero } = useGlobalContext().pageValues;

	return (
		<Wrapper>
			<div className="container aboutPageSection">
				<p className="paragraph-top-data">Why Is It Necessary To Learn</p>
				<h1 className="about-page-heading">Learn About ReactJS & Styled Components</h1>
				<p className="about-page-para">
					Learning ReactJS and Styled Components is essential for modern web development. ReactJS, with its component-based architecture, promotes reusability and maintainability, making it a go-to choice for building complex user interfaces. Styled Components, on the other hand, leverages the power of JavaScript to style these components, allowing for dynamic styling and theming. When used together, they provide a seamless development experience, enabling developers to build beautifully styled UIs with efficient code. This synergy between structure (ReactJS) and style (Styled Components) is what makes
					them a powerful combo in the web development toolkit.Now if you have any curiosity about these two languages and want to learn more about them, Do check out the next section.
				</p>
				<section className="summary-section grid grid-two-column">
					<div className="reactSummary">
						<PartitionComponents {...reactJsSummary} />
					</div>
					<div className="styleComponentSummary">
						<PartitionComponents {...styledComponentSummary} />
					</div>
				</section>

				<section className="detailedDesc">
					<div className="container learning-react" id="reactJS">
						<Hero {...aboutPageReactHero} />
					</div>
					<div className="container leaning-styled-components" id="styled-components">
						<Hero {...aboutPageStyleHero} />
					</div>
				</section>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	.aboutPageSection {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;

		.about-page-heading {
			font-size: 4rem;
			line-height: 7rem;
		}

		.about-page-para {
			font-weight: light;
			font-size: medium;
			margin-bottom: 10rem;
		}

		.summary-section {
			text-align: left;
		}

		.detailedDesc {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-bottom: 10rem;
		}
	}
`;
export default About;
