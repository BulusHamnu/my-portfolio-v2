import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import useActiveSection from "../hooks/useActiveSession";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";

/* Header */
function Logo() {
  return (
    <div className="font-bold text-2xl">
      <span className="logo">Bulus</span>
    </div>
  );
}

function Menu({
  isOpen,
  toogleMenu,
}: {
  isOpen: boolean;
  toogleMenu: () => void;
}) {
  return (
    <div
      onClick={toogleMenu}
      className="rounded nav-menu cursor-pointer  p-1.5"
    >
      {isOpen ? (
        <X size={30} />
      ) : (
        <div className="flex flex-col justify-items-start items-end">
          <span className="bg-amber-50 p-0.5 mb-1 w-7 rounded"></span>
          <span className="bg-amber-50 p-0.5 mb-1 w-5 rounded"></span>
          <span className="bg-amber-50 p-0.5 mb-1 w-6 rounded"></span>
        </div>
      )}
    </div>
  );
}

function LinkItem({
  placeholder,
  to,
  sectionId,
  setIsOpen,
  activeSection,
}: {
  placeholder: string;
  to: string;
  sectionId: string;
  setIsOpen: (value: boolean) => void;
  activeSection: string;
}) {
  return (
    <li className="nav-link-item text-left">
      <NavLink
        to={to}
        onClick={() => setIsOpen(false)}
        className={`${activeSection === sectionId ? "text-[#a0ecce]" : ""} w-full block md:inline px-2 py-4 md:p-0 cursor-pointer`}
      >
        {placeholder}
      </NavLink>
    </li>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const contactLinkRef = useRef<HTMLAnchorElement>(null);
  const activeSection = useActiveSection([
    "contact",
    "hero",
    "projects",
    "skills",
    "about",
    "music",
    "services",
  ]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  function toogleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          onClick={() => toogleMenu()}
          className={`fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.7)] z-30`}
        ></motion.div>
      ) : (
        ""
      )}

      <header
        className={`h-15 flex flex-row justify-between items-center fixed top-0 w-full px-3 z-20 ${isOpen || isScrolled ? "active" : ""}`}
      >
        <Logo />
        <Menu isOpen={isOpen} toogleMenu={toogleMenu} />
        <nav className={`main-navbar  ${isOpen ? "active" : ""}`}>
          <ul className="flex flex-col w-full justify-center">
            {/* Hero */}
            <LinkItem
              placeholder="Home"
              to="/#hero"
              sectionId="hero"
              setIsOpen={setIsOpen}
              activeSection={activeSection}
            />
            {/* Services */}
            <LinkItem
              placeholder="Services"
              to="/#services"
              sectionId="services"
              setIsOpen={setIsOpen}
              activeSection={activeSection}
            />
            {/* Projects */}
            <LinkItem
              placeholder="Projects"
              to="/#projects"
              sectionId="projects"
              setIsOpen={setIsOpen}
              activeSection={activeSection}
            />
            {/* Skills */}
            <LinkItem
              placeholder="Skills"
              to="/#skills"
              sectionId="skills"
              setIsOpen={setIsOpen}
              activeSection={activeSection}
            />
            {/* About */}
            <LinkItem
              placeholder="About Me"
              to="/#about"
              sectionId="about"
              setIsOpen={setIsOpen}
              activeSection={activeSection}
            />
            {/* Music */}
            <LinkItem
              placeholder="Music"
              to="/music"
              sectionId="music"
              setIsOpen={setIsOpen}
              activeSection={activeSection}
            />
            {/* Contact */}
            <li
              onClick={() => contactLinkRef.current?.click()}
              className="contact-link text-left cursor-pointer"
            >
              <NavLink
                ref={contactLinkRef}
                to="/#contact"
                onClick={() => setIsOpen(false)}
                className={`${activeSection === "contact" ? "text-[#a0ecce]" : ""} w-full block md:inline px-2 py-4 md:p-0`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
