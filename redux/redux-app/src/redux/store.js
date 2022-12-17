import { configureStore } from "@reduxjs/toolkit";
// export default messageSlice.reducer;
// as the messageSlice is exported default , so with any name it can be imported
// import messageSlice from "./slices/messageSlice";
// importing the same name as probably given to the key
import messageReducer from "./slices/messageSlice";
import notesSlice from "./slices/notesSlice";
export default configureStore({
  reducer: {
    // key:value different name
    // messageReducer: messageSlice,
    // key:value same name , if you want to keep the same name of key value pair as that of you have imported
    messageReducer,
    notesReducer: notesSlice,
  },
});
