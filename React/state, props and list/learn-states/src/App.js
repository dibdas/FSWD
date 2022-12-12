import { useState } from "react";
import "./App.css";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import Counter from "./components/Counter";
import Fruits from "./components/Fruits";
import Notes from "./components/Notes";
import UserForms from "./forms and hooks/UserForms";

function App() {
  const [countInParent, setCountInParent] = useState(0);
  function updateCountInParent(count) {
    setCountInParent(count);
  }
  function UploadDataFromParent() {
    console.log(`I will start uploading the data now`);
  }
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Fruits /> */}
      {/* <Notes /> */}
      {/* <p>Inside the parent:{countInParent}</p> */}
      {/* onCountUpdate is a prop, passing a function updateOuntIn Parent */}
      {/* <Child1 onCountUpdate={updateCountInParent} /> */}
      {/* <Child2
        countFromParent={countInParent}
        uploadData={UploadDataFromParent}
      /> */}

      <UserForms />
    </div>
  );
}

export default App;
