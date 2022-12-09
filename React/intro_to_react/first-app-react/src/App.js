import logo from "./logo.svg";
import "./App.css";
import Card from "./components/card";
import Avatar from "./components/avatar";

function App() {
  const mystyle = {};
  return (
    // <div className="App">
    //   /* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */
    // </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        marginBlock: `1rem`,
        marginInline: `1rem`,
        gap: `0.7rem`,
      }}
    >
      <Card
        //  put the cursor beside the component then press crt +space press enter ,
        //  import statement will be written at the above

        name="amit"
        email="amit@gmail.com"
        age="43"
        mobile="android"
        image="https://via.placeholder.com/200"
      />
      <Card
        //  put the cursor beside the component then press crt +space press enter ,
        //  import statement will be written at the above

        name="ankita"
        email="ankita@gmail.com"
        age="7"
        mobile="blackbarry"
        image="https://via.placeholder.com/200"
      />
      <Card
        //  put the cursor beside the component then press crt +space press enter ,
        //  import statement will be written at the above

        name="chadni"
        email="chadni@gmail.com"
        age="13"
        mobile="ios"
        image="https://via.placeholder.com/200"
      />
      <Avatar
        //    put the cursor beside the component then press crt +space press enter ,
        //  import statement will be written at the above

        name="Random"
        image="https://via.placeholder.com/200"
      />
    </div>
  );
}

export default App;
