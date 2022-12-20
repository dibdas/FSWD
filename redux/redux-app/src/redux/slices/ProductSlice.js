import { createAsyncThunk, createSlice, isPending } from "@reduxjs/toolkit";

// async function fetchdata() {
//   const response = await fetch("https://api.escuelajs.co/api/v1/products");
//   const data = await response.json();
//   dispatch(loadProducts(data));
// }

// giving the name 'fetch/products' to createAsyncThunk, any name can be
// given to it which will be able to identify the asyncthunk
// createAsyncThunk create a object it is almost like a promise

// when the thunk is being called , thunk will send  or dispatch three actions ,
// which are pending , fullfiled, rejected,
// 1st dispatch action pending, 2nd fullfilled, 3rd -> rejected
// thunk generally dispatch the  action ->pending , when it is out there to fetch
// the data from the internet or server, and you can update the store you want
// with this pending info
// no data is being send during the pending state
// when thunk receives the data from the internet or from the server it dispatch
// the action->fullfil, so update the store with this data
// if any error occurs link api error then thunk will dispatch the action rejected

export const fetchData = createAsyncThunk("fetch/products", async () => {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  // returning Promise, returns the awaited response
  return await response.json();
});
const productSlice = createSlice({
  name: `productSlicename`,
  initialState: {
    products: [],
    // there can be for status
    // in the UI I can show the loading as I am handling the status as well
    status: "idle", // success,idle,loading,failed
    // error is for the failed state
    error: null,
  },
  reducers: {
    loadProducts: (state, action) => {
      state.products = action.payload;
    },
  },
  // to invoke the status into the reducers we use another property to add
  // which isknown as extrareducer
  // extrareducer is a function which takes in a builder, that build reducers
  extraReducers: function (builder) {
    // we will get the status i.e isPending, fullfiled, rejected from the fetchdata
    // and the fetchData gets from asyncthunk
    // when fetchData is pending state and action comes into picture
    // when pending action came we can do anything with state and action

    builder
      // as soon as you call the fetchData function, it sends the fetchData.pending
      // action to  reducer and that reducer set its status to loading
      .addCase(fetchData.pending, (state, action) => {
        state.status = "loading";
      })
      // from await response.json in the fetchData(), we get the data in the
      // action.payload when promise get fulfilled

      // fetchData actually return the await.response.json, so when it is returning
      // await response , so promise is being returned from fetchdata, so when the promise
      // fro the fetchdata is fulfilled , we can get the whole data from the action .payload

      .addCase(fetchData.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "success";
      })
      // when the promise is rejected for any reason , we get the error message
      // inside the action.payload as well
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.products = action.error.message;
      });
  },
});

// combining all the reducers into one reducer by using combinereducer
export default productSlice.reducer;
// reducers are being exported in the form of actions
// action named loadProducts is also made,actions are made of the same name as that of the reducers
export const { loadProducts } = productSlice.actions;
