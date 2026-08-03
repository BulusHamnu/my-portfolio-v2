import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Music from "./pages/music";

/* Home */
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
