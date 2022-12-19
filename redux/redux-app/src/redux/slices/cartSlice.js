import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: `cartnameSlice`,
  initialState: {
    cart: [],
  },
  reducers: {
    addTocart: (state, action) => {
      console.log(state.cart.length);
      // trying to find the item inside the cart
      // id of the the item is being passed through the payload, while clicking on add to cart
      const cartItem = state.cart.find(
        (cartitem) => cartitem.id === action.payload
      );
      //   if cartItem is being found then quantity should be increased
      if (cartItem) {
        cartItem.quantity += 1;
        // if cartItem is present then return from here
        return;
      }
      //   if cartItem is not present
      state.cart.push({
        quantity: 1,
        id: action.payload,
      });
    },
    removeFromCart: (state, action) => {
      const cartItem = state.cart.find(
        (cartitem) => cartitem.id === action.payload
      );
      //   if cartItem is being found then quantity should be decreased
      if (cartItem) {
        cartItem.quantity -= 1;
        if (cartItem.quantity === 0) {
          state.cart.filter((item) => item.id !== action.payload);
        }
      }
    },
  },
});
export const { addTocart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

// structure inside the cart
// {
//     quantity:3,
//     id:123

// }
