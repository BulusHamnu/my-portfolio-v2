import Header from "./components/header";

/* Home */
function App() {
  return (
    <div className="container">
      <Header />
      <section className="hero-section pt-28">
        <span
          style={{ fontSize: "12px" }}
          className="border-b-gray-700 px-4 py-1.5 rounded-2xl bg-gray-900 text-shadow-sm m-3"
        >
          Backend Developer
        </span>
        <h1>
          Hi, I'm <span className="text-amber-500">Hamnu Bulus</span> <br />
          Madu
        </h1>
        <p className="text-left">
          A passionate software developer with a strong interest in backend and
          full-stack development. I have hands-on experience with HTML, CSS,
          JavaScript, React.js, Python, and Node.js. If you’d like to connect or
          discuss potential collaborations and opportunities, feel free to reach
          out!
        </p>
      </section>
    </div>
  );
}

export default App;
