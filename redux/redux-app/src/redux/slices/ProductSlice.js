import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
  name: `productSlicename`,
  initialState: {
    products: [],
  },
  reducers: {
    loadProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});
export default productSlice.reducer;
// reducers are being exported in the form of actions
// action named loadProducts is also made,actions are made of the same name as that of the reducers
export const { loadProducts } = productSlice.actions;
