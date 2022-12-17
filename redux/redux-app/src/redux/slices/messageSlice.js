import { createSlice } from "@reduxjs/toolkit";
// messageSlice is formed when you do createSlice, it takes all the arguments, combine them all together
// and form an object which is named as messageSlice, where you get reducer property , action porperty
// In actions we get setMessage actions , resetMessage actions which you can dispatch from the components

// createSlice provide us the reducer and action after making it
const messageSlice = createSlice({
  // giving a name to createSlice .e  name: "messageSliceName", the name is given to differentiate between the slices
  name: "messageSliceName",
  // initialState is a keyword not variable
  initialState: {
    message: " t",
    counter: 0,
  },
  // reducer is basically an fuction which takes the the previous state i.e default state and
  // updates it based on the action
  reducers: {
    // state which here is statev it contains initialState.message
    // statev just a variable can be named anything
    // the name the reducer is setMessage
    // setMessage can also be said as function
    // statev defined as the previous state
    setMessage: (stateV, action) => {
      console.log(stateV.message);
      console.log(action);
      // message is getting updated with the payload inside the action
      // we pass data inside the payload
      // passing the data inside the action through payload
      // updating the previous state
      // inputValue comes to action.paload , therefore previous state gets updated i.e state.message gets updated
      stateV.message = action.payload;
    },
    resetMessage: (state, action) => {
      state.message = "";
    },
    increaseCounter: (state) => {
      console.log(state.counter); // shows the vale of previous state
      // state.counter = state.counter + 1;
      state.counter += 1;
    },
  },
});

// reducer below combined all the reducers internally which are  defined above nad put into one object
export default messageSlice.reducer;
// the name of the action is setMessage and resetMessage
export const { setMessage, resetMessage, increaseCounter } =
  messageSlice.actions;
