import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className="footer">
      <p>© 2026 My Website</p>
      <p>Current Theme: {theme}</p>
    </footer>
  );
}

export default Footer;