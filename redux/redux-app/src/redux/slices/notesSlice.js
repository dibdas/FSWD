import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: `notesSliceName`,
  initialState: {
    notes: [],
  },
  reducers: {
    createNote: (state, action) => {
      // this what it was done earlier
      // state.notes=[...state.notes,action.payload]
      // now
      console.log(state.notes);
      console.log(action.payload);
      state.notes.push(action.payload);
    },
    deleteNote: (state, action) => {},
  },
});
export default notesSlice.reducer;
export const { createNote, deleteNote } = notesSlice.actions;
