import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/slice";


export const store = configureStore({
    reducer: {
        products: productsReducer,
    },
})