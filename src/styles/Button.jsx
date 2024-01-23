import styled from "styled-components";

export const Button = styled.button`
	text-decoration: none;
	max-width: auto;
	background-color: rgb(98, 84, 243);
	color: ${({ theme }) => theme.colors.white};
	padding: 1.4rem 2.4rem;
	border: none;
	text-transform: uppercase;
	text-align: center;
	border-radius: 1rem;
	cursor: pointer;
	transition: all 0.3s ease;
	-webkit-transition: all 0.3s ease 0s;
	-moz-transition: all 0.3s ease 0s;
	-o-transition: all 0.3s ease 0s;

	&:hover,
	&:active {
		box-shadow: ${({ theme }) => theme.colors.shadowSupport};
		transform: scale(0.96);
	}

	a {
		text-decoration: none;
		color: rgb(255, 255, 255);
		font-size: 1.4rem;
	}
`;
