// import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import PropTypes from "prop-types";

const Hero = ({ heroTitle, heroParaContent, heroTopData, heroButton, navLink, imageLink, altText }) => {
	return (
		<Wrapper>
			<div className="grid grid-two-column">
				<div className="paragraphSectionTexts">
					<p className="paragraph-top-data">{heroTopData}</p>
					<h1 className="paragraph-heading">{heroTitle}</h1>
					<p className="paragraph-para">{heroParaContent}</p>
					<NavLink className="btn-text" to={navLink}>
						<Button className="btn contact-btn">{heroButton}</Button>
					</NavLink>
				</div>
				<div className="paragraphSectionImage">
					<picture>
						<img src={imageLink} alt={altText} />
					</picture>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	.paragraphSectionTexts {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: start;
		text-align: left;

		.paragraph-heading {
			font-size: 4rem;
			font-weight: bolder;
			line-height: 6rem;
			margin-top: 0.8rem;
			margin-bottom: 2.5rem;
		}

		.paragraph-para {
			font-size: medium;
			margin-bottom: 4rem;
		}
	}

	.paragraphSectionImage {
		img {
			width: 100%;
			border-radius: 1rem;
			box-shadow: ${({ theme }) => theme.colors.shadow};
			cursor: pointer;
			transform: scale(1);
			transition: all 0.3s ease-in-out;

			&:hover {
				transform: scale(1.1);
			}
		}
	}
`;

Hero.propTypes = {
	heroTitle: PropTypes.string,
	heroParaContent: PropTypes.string,
	heroTopData: PropTypes.string,
	heroButton: PropTypes.string,
	navLink: PropTypes.string,
	imageLink: PropTypes.string,
	altText: PropTypes.string,
};
export default Hero;
