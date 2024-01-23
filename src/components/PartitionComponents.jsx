// import React from 'react'
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "../styles/Button";

const PartitionComponents = ({ sectionTitle, sectionContent, linkedID }) => {
	return (
		<Wrapper>
			<div className="summary">
				<div className="partition"></div>
				<div className="summary-division">
					<div className="summary-heading">{sectionTitle}</div>
					<div className="summary-para">{sectionContent}</div>
					<a href={linkedID} target="_self">
						<Button>Learn More</Button>
					</a>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	.summary {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		gap: 8rem;

		.partition {
			border: 0.2rem solid #bec2c6ea;
		}

		.summary-heading {
			font-size: 2.3rem;
			font-weight: bold;
			margin-bottom: 1.2rem;
		}

		.summary-para {
			font-size: 1.5rem;
			font-weight: normal;
			line-height: 2.5rem;
			margin-bottom: 2.5rem;
		}
	}
`;
PartitionComponents.propTypes = {
	sectionTitle: PropTypes.string,
	sectionContent: PropTypes.string,
	linkedID: PropTypes.string,
};
export default PartitionComponents;
