import { motion } from "motion/react";

/* About Me Panel */
function AboutPanel() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="text-left mt-9"
    >
      <h3 className="text-lg md:text-2xl mt-3 mb-5">About Me 👨🏾‍💻</h3>
      <p>
        I’m a backend-focused developer. I enjoy building systems and
        understanding how things actually work under the hood.
      </p>
      <p>
        I got into programming through curiosity about robotics and how
        computers work. That mindset still affects how I approach coding today.
      </p>
      <p>
        Right now, I focus mainly on backend development using Node.js, MongoDB,
        and API design. I also understand frontend tools like React, but backend
        is where I’m strongest and where I’m going deeper.
      </p>
      <h3 className="text-lg md:text-2xl mt-3 mb-5">Interest 💡</h3>
      <p>
        Outside coding, I enjoy making music and watching anime. I also like
        exploring Linux and understanding how systems run at a deeper level.
      </p>
      <h3 className="text-lg md:text-2xl mt-3 mb-5">Passion 🔥</h3>
      <p>
        I’m not just interested in writing code. I care about understanding
        systems, networking, and performance. I like knowing what is happening
        behind the scenes, not just making things work on the surface.
      </p>
      <h3 className="text-lg md:text-2xl mt-3 mb-5">Goals 🎯</h3>
      <p>
        My goal is to grow into an engineer who can build and design systems
        that have real impact. I want to contribute to technology at a deeper
        level and create tools that people actually rely on.
      </p>
      <p style={{ marginTop: "10px" }} className="font-extrabold">
        I use Arch btw
      </p>
    </motion.div>
  );
}

export default AboutPanel;
