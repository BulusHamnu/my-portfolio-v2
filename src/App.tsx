import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Music from "./pages/music";
import ScrollToTop from "./components/scrollToTop";

/* Home */
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
