import { ArrowBigUpIcon } from "lucide-react";

/* Footer */
function Footer() {
  return (
    <footer
      id="footer"
      className=" flex flex-col items-center gap-6 md:flex-row md:justify-between py-5 px-8 md:py-3 md:px-8 mt-20 lg:mb-3"
    >
      <p>&copy; {new Date().getFullYear()} Hamnu Bulus Madu</p>
      <a
        href="#hero-section"
        className="anchor to-top-span flex flex-row flex-no-wrap items-center gap-1"
      >
        Back to Top
        <span className="to-top-arrow">
          <ArrowBigUpIcon size={18} />
        </span>
      </a>
    </footer>
  );
}

export default Footer;
