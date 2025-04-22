import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    cart: [],
    order: null,
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        fetchProducts: (state, action) => {
           
            state.products = action.payload;
           
        },
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(product => product.id !== action.payload);
        },
        checkout: (state, action) => {
            state.order = action.payload;
        }
    }
});

export const { fetchProducts, addToCart, removeFromCart, checkout } = productSlice.actions;
export default productSlice.reducer;
