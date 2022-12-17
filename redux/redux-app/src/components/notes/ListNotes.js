import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../../redux/slices/notesSlice";

function ListNotes() {
  const notes = useSelector((state) => state.notesReducer.notes);
  console.log(notes);
  const dispatch = useDispatch();

  return (
    <div>
      {notes.map((note, index) => {
        return (
          <div key={index}>
            <p>{note.id}</p>
            <h2>{note.title}</h2>
            <p>{note.description}</p>
            {/* id is going inside the payload , we are passing id inside the payload */}
            <button onClick={() => dispatch(deleteNote(note.id))}>
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ListNotes;
