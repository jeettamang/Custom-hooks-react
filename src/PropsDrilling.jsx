import { useContext } from "react";
import { AccountContext } from "./context/AccountContext";
import { ThemeContext } from "./context/ThemeContext";

export const PropsDrilling = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const context = useContext(AccountContext);
  if (!context) throw Error("Contxt is not wrapped properly");
  const { user, setUser } = context;

  return (
    <div>
      {JSON.stringify(user)}
      <input onChange={(e) => setUser({ name: e.target.value })} />
      <div>
        Current theme is {theme} <br />
        <button onClick={toggleTheme}>ToggleTheme</button>
      </div>
    </div>
  );
};
