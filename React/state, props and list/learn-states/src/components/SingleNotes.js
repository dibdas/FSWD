import React from "react";

function SingleNotes(props) {
  const notesStyle = {
    padding: `1.3rem`,
    borderRadius: `1rem`,
    border: `2px solid green`,
    backgroundColor: `white`,
    fontSize: `1.6rem`,
    color: `black`,
  };
  return (
    <div style={notesStyle}>
      <p>{props.note}</p>
    </div>
  );
}

export default SingleNotes;
