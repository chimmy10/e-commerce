import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartVisible: false,
	isMobileMenuOpen: false,
	number: 0,
	active: 0,
	quantitiy: 1,
	cart: [],
};

const commerceSlice = createSlice({
	name: "commerce",
	initialState,
	reducers: {
		isCartVisible(state) {
			state.cartVisible = !state.cartVisible;
		},
		setIsMobileMenuOpen(state) {
			state.isMobileMenuOpen = !state.isMobileMenuOpen;
		},
		previous(state) {
			state.number = state.number -= 1;
			state.active = state.number;
		},
		next(state) {
			state.number = state.number += 1;
			state.active = state.number;
		},
		click(state, action) {
			state.active = action.payload;
			state.number = action.payload;
		},
		decrease(state) {
			state.quantitiy =
				state.quantitiy === 1 ? state.quantitiy : (state.quantitiy -= 1);
		},
		increase(state) {
			state.quantitiy = state.quantitiy += 1;
		},
		addToCart(state, action) {
			const product = action.payload; // Get the product details
			const existingProduct = state.cart.find((item) => item.id === product.id);

			if (existingProduct) {
				// Update quantity if product exists
				existingProduct.quantity += state.quantitiy;
			} else {
				// Add new product to cart
				state.cart.push({ ...product, quantity: state.quantitiy });
			}
			state.quantitiy = 1;
		},
		remove(state) {
			state.cart = [];
		},
	},
});

export const {
	isCartVisible,
	setIsMobileMenuOpen,
	previous,
	next,
	click,
	decrease,
	increase,
	addToCart,
	remove,
} = commerceSlice.actions;

export default commerceSlice.reducer;
