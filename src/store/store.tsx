import { configureStore } from "@reduxjs/toolkit";
import cart from "../features/cartSlice";

export const store = configureStore({
	reducer: {
		cart: cart,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
