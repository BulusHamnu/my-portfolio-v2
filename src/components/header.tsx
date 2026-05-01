import { useState, useEffect } from "react";
import { X } from "lucide-react";

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
      className="rounded nav-menu  cursor-pointer  p-1.5"
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

function LinkItem({ text }: { text: string }) {
  return (
    <li className="nav-link-item cursor-pointer px-2 py-3 text-left">{text}</li>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  function toogleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <header
      className={`h-15 flex flex-row justify-between items-center fixed top-0 w-full px-3 z-20 ${isOpen || isScrolled ? "active" : ""}`}
    >
      <Logo />
      <Menu isOpen={isOpen} toogleMenu={toogleMenu} />
      <nav className={`main-navbar  ${isOpen ? "active" : ""}`}>
        <ul className="flex flex-col w-full justify-center">
          <LinkItem text="Home" />
          <LinkItem text="Projects" />
          <LinkItem text="Skills" />
          <LinkItem text="About Me" />
          <LinkItem text="Contact" />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
