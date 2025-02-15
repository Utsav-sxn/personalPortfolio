import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const RedirectToExternal = () => {
    const location = useLocation();
  
    useEffect(() => {
      if (location.pathname === "/resume") {
        window.location.href = "https://drive.google.com/file/d/19yI1fVWfeuRje9CrXHEZ6rm2Jtrw-TTY/view?usp=sharing"
      }
    }, [location.pathname]);
  
    return null;
  };
  
export default RedirectToExternal;
