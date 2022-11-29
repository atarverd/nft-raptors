import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TNft = {
  id: string;
  img: string;
  name: string;
  currentPrice: number;
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
      state.cart.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
