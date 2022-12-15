import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import FreePricing from "./pages/FreePricing";
import PremiumPricing from "./pages/PremiumPricing";
import FreeMiumPricing from "./pages/FreeMiumPricing";

function App() {
  return (
    <div className="App">
      Hello from App
      <Navigation />
      <Routes>
        {/* inside element you can JSX , generally we do pass component */}
        <Route
          path="/home"
          element={<h1>This is another Home from element </h1>}
        ></Route>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/pricing" element={<Pricing />} /> */}
        <Route path="*" element={<NotFound />} />
        {/* userId is url parameter,userId is dynamic */}
        <Route path="/user/:userId" element={<Profile />} />
        <Route path="/user/:userId/:projectId" element={<Project />} />
        <Route path="/pricing" element={<Pricing />}>
          <Route path="free" element={<FreePricing />} />
          <Route path="premium" element={<PremiumPricing />} />
          <Route path="freemium" element={<FreeMiumPricing />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
