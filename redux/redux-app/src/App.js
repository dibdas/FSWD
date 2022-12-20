import "./App.css";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import Navbar from "./components/e-commerce/Navbar";
import ProductList from "./components/e-commerce/ProductList";
import CreateNotes from "./components/notes/CreateNotes";
import ListNotes from "./components/notes/ListNotes";

function App() {
  return (
    <div className="App">
      {/* <Child1 />
      <Child2 /> */}
      {/* <CreateNotes />
      <ListNotes /> */}
      <Navbar />
      <ProductList />
    </div>
  );
}

export default App;
