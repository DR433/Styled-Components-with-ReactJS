// import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
	return (
		<nav>
			<Navbar className="menuIcons">
				<ul className="navbar-list">
					<li>
						<NavLink className="navbar-link" to={"/"}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink className="navbar-link" to={"/about"}>
							About
						</NavLink>
					</li>
					<li>
						<NavLink className="navbar-link" to={"/contacts"}>
							Contacts
						</NavLink>
					</li>
					<li>
						<NavLink className="navbar-link" to={"/services"}>
							Services
						</NavLink>
					</li>
				</ul>
			</Navbar>
		</nav>
	);
};

const Navbar = styled.div`
	.navbar-list {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 4rem;
		li {
			font-weight: bold;
			list-style: none;
			font-style: italic;

			.navbar-link {
				text-decoration: none;

				&:link,
				&:visited {
					font-size: 2rem;
					display: inline-block;
					color: ${({ theme }) => theme.colors.black};
					transition: color 0.3s linear;
				}

				&:hover,
				&:active {
					color: ${({ theme }) => theme.colors.helper};
				}
			}
		}
	}
`;

export default Nav;
