import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Music from "./pages/music";
import ScrollToTop from "./components/scrollToTop";
import { HelmetProvider } from "react-helmet-async";

/* Home */
function App() {
  return (
    <div className="container space-y-20 md:space-y-24">
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/music" element={<Music />} />
            <Route path="/music/:slug" element={<Music />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}

export default App;
