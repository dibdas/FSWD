import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../../redux/slices/notesSlice";

function CreateNotes() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  function handleSubmit(event) {
    event.preventDefault();
    // dispatch an action or an event when you submit a form
    // same name for key value pair so no need to write twice for key value pair
    // nanaoid return random id , random hex code or random string of 13 length
    dispatch(createNote({ title: title, description, id: nanoid(13) }));
    console.log(title, description);
  }
  return (
    <div style={{ marginBlock: `1rem` }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          onChange={(event) => setDescription(event.target.value)}
        />
        <button onSubmit={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default CreateNotes;
