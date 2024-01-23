import { productsData } from "../data/ServicesContextData";

export const initialProducts = {
	productItems: productsData,
	item: "product",
};

const productsReducer = (state, action) => {
	switch (action.type) {
		case "change_To_Products_Data":
			return {
				...state,
				productItems: action.payload.productItems,
				item: action.payload.item,
			};

		case "change_To_carts_Data":
			return {
				...state,
				productItems: action.payload.cartItems,
				item: action.payload.item,
			};
		default:
			throw new Error("We could not change the items due to an error");
	}
};

export default productsReducer;
