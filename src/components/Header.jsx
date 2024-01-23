// import React from 'react'
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import styled from "styled-components";

const Header = () => {
	return (
		<MainHeader>
			<NavLink to={"/"}>
				<img src="https://miro.medium.com/v2/resize:fit:1400/0*6i4SKgCXxJQ0vdju.png" alt="Website Heading Logo" className="navbar-logo" />
			</NavLink>
			<Nav />
		</MainHeader>
	);
};

const MainHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.3rem 5.8rem;
	height: 8rem;
	background-color: ${({ theme }) => theme.colors.bg};
	position: fixed;
	width: 100vw;
	z-index: 10;
	box-shadow: 0.5rem 0.5rem 0.5rem #dadada;

	.navbar-logo {
		height: 6rem;
		max-width: 100%;
	}
`;
export default Header;
