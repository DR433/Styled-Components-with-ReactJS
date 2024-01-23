import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { pageContextData } from "../data/PageContextData";
import cartItemsReducer, { initialCartItem } from "../reducers/change-cart-items";
import productsReducer, { initialProducts } from "../reducers/alter-products-cart";
import { productsData } from "../data/ServicesContextData";
// import { cartItemsReducer } from "../components/CartItems";

// making a context
const AppContext = createContext();

// making a provider
const AppProvider = ({ children }) => {
	// making a reducer to change the product and cart items
	const [products, dispatchProducts] = useReducer(productsReducer, initialProducts);

	// making a reducer to add or remove items from the cart and update the total number of items
	const [cartItems, dispatchCartItems] = useReducer(cartItemsReducer, initialCartItem);

	// pure function to change the items in products section
	const changeToProductsData = () => {
		const newProducts = {
			productItems: productsData,
			item: "product",
		};
		dispatchProducts({
			type: "change_To_Products_Data",
			payload: newProducts,
		});
	};

	// pure functions to change the items in cart section
	const changeToCartData = () => {
		const newProducts = {
			cartItems: cartItems.products,
			item: "cart",
		};
		dispatchProducts({
			type: "change_To_carts_Data",
			payload: newProducts,
		});
	};

	const addItem = (item) => {
		const newCartItem = cartItems.products;
		newCartItem.push(item);
		updateItemCount(newCartItem);

		dispatchCartItems({
			type: "add_item",
			payload: newCartItem,
		});
	};
	const removeItem = (item) => {
		let newCartItem = cartItems.products;
		newCartItem = newCartItem.filter((items) => items._id.$oid !== item._id.$oid);
		updateItemCount(newCartItem);

		dispatchCartItems({
			type: "remove_item",
			payload: newCartItem,
		});
	};

	const updateItemCount = (items) => {
		const total = items.length;

		dispatchCartItems({
			type: "update_total_count",
			payload: total,
		});
	};

	// values to send with context
	const value = {
		pageValues: pageContextData(),
		productsData: products,
		cartItems: cartItems,
		changeToProductsData,
		changeToCartData,
		addItem,
		removeItem,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
	children: PropTypes.shape({
		children: PropTypes.func,
	}),
};

export { AppContext, AppProvider };
