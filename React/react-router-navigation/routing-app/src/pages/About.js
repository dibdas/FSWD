import React from "react";
import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation();
  const data = location.state;
  console.log(data);

  return (
    <div>
      About<p>{data.from}</p>
      <p>{data.anykey}</p>
      <p>{data.luckynumber}</p>
    </div>
  );
}

export default About;
