import {  createSlice, PayloadAction } from "@reduxjs/toolkit";

type TNft = {
  id: string;
  img: string;
  name: string;
  currentPrice: number;
  ownerId: string;
};

type TInitialState = {
  cart: TNft[];
};

const initialState: TInitialState = {
	cart: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<TNft>) => {
			const validator=state.cart.find(item=>item.id===action.payload.id);
			if(!validator)
				state.cart.push(action.payload);
		},
		deleteFromCart: (state, action: PayloadAction<string>) => {
			state.cart = state.cart.filter((item) => item.id !== action.payload);
		},

		clearAllFromCart: (state) => {
			state.cart = [];
		},
	},
});

export const { addToCart, deleteFromCart, clearAllFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
