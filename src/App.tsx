import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Music from "./pages/music";
import ScrollToTop from "./components/scrollToTop";

/* Home */
function App() {
  return (
    <div className="container space-y-20 md:space-y-24">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/music/:slug" element={<Music />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
