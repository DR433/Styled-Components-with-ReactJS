export const initialCartItem = {
	products: [],
	total: 0,
};

const cartItemsReducer = (state, action) => {
	switch (action.type) {
		case "add_item":
			return {
				...state,
				products: action.payload,
			};

		case "remove_item":
			return {
				...state,
				products: action.payload,
			};

		case "update_total_count":
			return {
				...state,
				total: action.payload,
			};
		default:
			throw new Error("We are unable to update cart items due to an Error.");
	}
};

export default cartItemsReducer;
