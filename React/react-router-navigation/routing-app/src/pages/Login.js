import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState();
  const navigate = useNavigate();
  function handleChange(event) {
    setName(event.target.value);
    console.log(name);
  }
  function handleSubmit(event) {
    // preventing to reload te page
    event.preventDefault();
    name === `amit` ? navigate("/user/amit") : navigate("/about");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
