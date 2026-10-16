import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className="home">
      <h1>Welcome to Salil's Website!</h1>

      <p>
        This is a React Context API example.
      </p>

      <p>
        Current Theme: <strong>{theme.toUpperCase()}</strong>
      </p>

      <p>
        Click the button in the navbar to change the theme.
      </p>
    </main>
  );
}

export default Home;