import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
      {
        image: "/Image/Product1-img1.png",
        title: "Sneaker Red",
        price: "70",
      },
      {
        image: "/Image/Product1-img2.png",
        title: "Casual",
        price: "60",
      },
      {
        image: "/Image/Product1-img3.png",
        title: "Part wear",
        price: "80",
      },
      {
        image: "/Image/Product1-img4.png",
        title: "Sneaker Black",
        price: "70",
      },
      {
        image: "/Image/Product1-img5.png",
        title: "Sports",
        price: "100",
      },
      {
        image: "/Image/Product1-img6.png",
        title: "Leather Shoes",
        price: "90",
      },
    ],
  };

export const counterSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const {products} = counterSlice.actions
export default counterSlice.reducer;
