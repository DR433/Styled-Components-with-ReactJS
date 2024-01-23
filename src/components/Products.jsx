// import React from 'react'
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/UseGlobalContext";

const Products = ({ _id, title, images, studio, genre, price, currency, item, buttonText }) => {
	const { addItem, removeItem } = useGlobalContext();
	return (
		<Wrapper>
			<div className="products-image">
				<NavLink to={"/productDetails/:id"}>
					<img src={images.large.url} alt={title} />
				</NavLink>
			</div>
			<div className="products-desc">
				<div className="paragraph-top-data">{studio}</div>
				<NavLink className="products-title" to="/productDetails/:id">
					{title}
				</NavLink>
				<div className="products-genre">{genre ?? "controllers"}</div>
				<div className="products-price">{`${price + " " + currency}`}</div>
				{item === "product" && (
					<Button className="btn products-cart-button" onClick={() => addItem({ _id, title, images, studio, genre, price, currency })}>
						{buttonText}
					</Button>
				)}
				{item === "cart" && (
					<Button className="btn products-cart-button" onClick={() => removeItem({ _id, title, images, studio, genre, price, currency })}>
						{buttonText}
					</Button>
				)}
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	width: 100%;
	border: 0.2rem solid #f8f6f6;
	background: #fbfafa;
	border-radius: 1rem;
	box-shadow: ${({ theme }) => theme.colors.shadow};

	.products-image {
		margin: 2rem;
		cursor: pointer;
		img {
			width: 19rem;
			height: 22rem;
		}
	}

	.products-desc {
		margin: 2rem;
		font-size: large;
		text-align: left;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: flex-start;

		.paragraph-top-data {
			font-size: medium;
		}

		.products-title {
			font-size: 2.5rem;
			color: ${({ theme }) => theme.colors.black};
			cursor: pointer;
			transition: all 0.3s linear;

			&:hover {
				color: ${({ theme }) => theme.colors.helper};
			}
		}

		.products-genre {
			font-size: small;
		}

		.products-price {
			margin: 3rem 0;
			font-size: 2.4rem;
			font-weight: bold;
		}

		.btn {
			width: 15rem;
			cursor: pointer;
		}
	}
`;
Products.propTypes = {
	_id: PropTypes.shape({
		$oid: PropTypes.string,
	}),
	title: PropTypes.string,
	images: PropTypes.shape({
		large: PropTypes.shape({
			url: PropTypes.string,
		}),
	}),
	studio: PropTypes.string,
	genre: PropTypes.string,
	price: PropTypes.number,
	currency: PropTypes.string,
	buttonText: PropTypes.string,
	item: PropTypes.string,
	addItems: PropTypes.func,
	removeItems: PropTypes.func,
};
export default Products;
