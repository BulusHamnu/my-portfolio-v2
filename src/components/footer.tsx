import { ArrowBigUpIcon } from "lucide-react";

/* Footer */
function Footer() {
  return (
    <footer
      id="footer"
      className=" flex flex-row justify-between p-3 md:px-8 mt-20 lg:mb-3"
    >
      <p>&copy; {new Date().getFullYear()} Hamnu Bulus Madu</p>
      <a
        href="#hero-section"
        className="to-top-span flex flex-row flex-no-wrap items-center gap-1"
      >
        Back to Top
        <span>
          <ArrowBigUpIcon size={18} />
        </span>
      </a>
    </footer>
  );
}

export default Footer;
