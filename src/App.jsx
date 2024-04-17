import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Planet from "./pages/Planet";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planet" element={<Planet />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </Router>
  );
}

export default App
