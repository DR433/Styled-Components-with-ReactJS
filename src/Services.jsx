import { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context/UseGlobalContext";
import Products from "./components/Products";

const Services = () => {
	const { productsData, cartItems, changeToProductsData, changeToCartData } = useGlobalContext();
	const [searchValue, setSearchValue] = useState("");
	const [data, setData] = useState(productsData.productItems);
	const searchProduct = (e) => {
		const value = e.target.value;
		setSearchValue(value);
	};
	useEffect(() => {
		if (searchValue !== "") {
			let newItem = productsData.productItems;
			newItem = newItem.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));
			setData(newItem);
		} else {
			setData(productsData.productItems);
		}
	}, [searchValue]);
	return (
		<Wrapper>
			<div className="container services-page">
				<div className="paragraph-top-data">If you like video games this section is perfect for you</div>
				<h1 className="service-page-heading">Welcome To Our Video Game Store</h1>
				<p className="service-heading-para">
					A video games e-commerce store website is a digital platform where gamers from all around the world can browse and purchase their favorite video games. This online store offers a wide variety of games across different genres, platforms, and age ratings, catering to the diverse tastes of the gaming community. Users can search for specific titles, view detailed descriptions, check out user reviews, and even watch gameplay trailers. The website also provides digital downloads, allowing gamers to start playing their new games immediately after purchase. Special features like wish lists,
					personalized recommendations, and seasonal sales enhance the shopping experience. Secure payment options and reliable customer service make the process safe and convenient. This e-commerce store is not just a marketplace, but a vibrant community for gamers to discover and share their passion for gaming.
				</p>
				{productsData.item === "product" && (
					<div className="search-products-box">
						<input type="search" name="search" id="search" placeholder="Enter Your Product Name Here" onChange={searchProduct} value={searchValue} />
					</div>
				)}
				<div className="nav-section">
					<div className="border-top"></div>
					<div className="service-page-nav">
						<button className="products-nav" onClick={() => changeToProductsData()}>
							Products
						</button>
						<div className="border-middle"></div>
						<button className="cart-nav" onClick={() => changeToCartData()}>
							Cart <span className="total-cart-items">{cartItems.total}</span>
						</button>
					</div>
					<div className="border-bottom"></div>
				</div>
				<div className="products-cart-section">
					{productsData.item === "product" &&
						data.map((products, index) => {
							return <Products key={index} {...products} item={productsData.item} buttonText="Add To Cart" />;
						})}
					{productsData.item === "cart" &&
						(cartItems.products.length === 0 ? (
							<p className="cart-para">There is Nothing to Show Here. Please Add Some Items To Your Cart. </p>
						) : (
							cartItems.products.map((products, index) => {
								return <Products key={index} {...products} item={productsData.item} buttonText="Remove Item" />;
							})
						))}
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	.services-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;

		.paragraph-top-data {
			font-size: 1.8rem;
		}

		.service-page-heading {
			font-size: 4rem;
			line-height: 6rem;
		}
		.service-heading-para {
			font-weight: light;
			font-size: medium;
			margin-top: 2.5rem;
			margin-bottom: 10rem;
		}

		.search-products-box {
			width: 100%;
			margin-bottom: 6rem;
			input {
				width: 100%;
				max-width: 110rem;
				border: 0.2rem solid gray;
				border-radius: 2rem;
				box-shadow: 0.1rem 0.1rem 0.2rem black;
				transition: all 0.2s ease-in-out;

				&:focus {
					border: 0.2rem solid ${({ theme }) => theme.colors.top};
					box-shadow: 0.1rem 0.2rem 0.9rem ${({ theme }) => theme.colors.top};
				}
			}
		}

		.nav-section {
			display: flex;
			flex-direction: column;
			width: 100%;

			.border-top,
			.border-bottom {
				border: 0.2rem solid #bec2c6ea;
				width: 100%;
				margin: 1.5rem 0;
			}

			.service-page-nav {
				display: flex;
				justify-content: space-evenly;
				align-items: center;

				.border-middle {
					border: 0.2rem solid #bec2c6ea;
					height: 2.5rem;
				}

				.products-nav,
				.cart-nav {
					font-size: 2rem;
					border: none;
					background: none;
					font-weight: bold;
					cursor: pointer;
					transition: all 0.3s linear;

					&:hover {
						color: ${({ theme }) => theme.colors.helper};
					}

					.total-cart-items {
						border: 1px solid red;
						background-color: red;
						font-size: small;
						color: white;
						padding: 5px 10px;
						border-radius: 50%;
					}
				}
			}
		}

		.products-cart-section {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1.5rem;
			width: 100%;

			.cart-para {
				margin-bottom: 5rem;
			}
		}
	}
`;
export default Services;
