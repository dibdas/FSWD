import React from "react";
import { useState } from "react";
import SingleNotes from "./SingleNotes";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [currnotes, setCurrNotes] = useState("");

  const [car, setCar] = useState({
    mode: `Innova`,
    year: 2018,
    color: `white`,
  });
  // {...car}-->a new Object is being created having the same propertie same that of car
  // color:`red`--> it is updating the only the color property
  setCar({ ...car, color: `red` });

  function updateCurrNote(event) {
    // setNotes.push(currnotes); // it wont start the re-rendering and it is also not recomended ata all
    // create a new array , inside the new Array destructure the previous array and
    // insert the new element
    const newNotesArray = [...notes, currnotes];
    setNotes(newNotesArray);
    // setNotes((prevState) => {
    //   return { ...prevState, notes };
    // });
  }
  function handleChange(event) {
    setCurrNotes(event.target.value);
  }
  const ulStyle = {
    display: `grid`,
    listStyle: `none`,
    gridTemplateColumns: `repeat(3,1fr)`,
    gap: `1rem`,
  };
  return (
    <>
      <input type="text" onChange={handleChange} placeholder="notes" />
      <button onClick={updateCurrNote}>submit</button>
      <ul style={ulStyle}>
        {notes.map((note, index) => {
          const { id } = note;
          // return <li key={index}>{note}</li>;
          return (
            <li key={index}>
              <SingleNotes note={note} />
            </li>
          );
          //   return <SingleNotes key={id} {...note} />;
        })}
      </ul>
    </>
  );
}

export default Notes;
