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
    deleteNote: (state, action) => {
      // as filter does not change the original array , it returns the new array..,
      // as we are getting the new array , so we need to pass the new array into old array
      //   from here --- state.notes.filter((note) => action.payload != note.id) we getting the new array
      //   so we did state.notes = ....
      console.log(state.notes);
      state.notes = state.notes.filter((note) => action.payload != note.id);
    },
  },
});
export default notesSlice.reducer;
export const { createNote, deleteNote } = notesSlice.actions;
