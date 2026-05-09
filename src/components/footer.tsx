import { ArrowBigUpIcon } from "lucide-react";
import { motion } from "motion/react";

/* Footer */
function Footer() {
  const variants = {
    initial: { x: 0 },
    hover: { y: -5, transition: { duration: 0.3 } },
  };

  return (
    <footer
      id="footer"
      className=" flex flex-col items-center gap-6 md:flex-row md:justify-between py-5 px-8 md:py-3 md:px-8 mt-20 lg:mb-3"
    >
      <p>&copy; {new Date().getFullYear()} Hamnu Bulus Madu</p>
      <motion.a
        initial="initial"
        whileHover="hover"
        href="#hero"
        className="anchor to-top-span flex flex-row flex-no-wrap items-center gap-1"
      >
        Back to Top
        <motion.span variants={variants}>
          <ArrowBigUpIcon size={18} />
        </motion.span>
      </motion.a>
    </footer>
  );
}

export default Footer;
