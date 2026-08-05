import { useLocation } from "react-router-dom";
import { useEffect } from "react";

/* Tittle Changer Componet */
function TittleChanger() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.toLowerCase();
    if (path.includes("/music")) {
      document.title = "Music | Bulus Hamnu";
    } else {
      document.title = "Bulus Hamnu | Backend Developer";
    }
  }, [pathname]);

  return null;
}

export default TittleChanger;
