import { useThemeContext } from "./context/ThemeContext";
import { AccountContext } from "./context/AccountContext";
import { useContext } from "react";

const Theme = () => {
  const { user, setUser } = useContext(AccountContext);
  const { theme, themeStyle, themeToggle } = useThemeContext();
  return (
    <div>
      <div>User name is : {JSON.stringify(user)}</div> <br />
      <input onChange={(e) => setUser({ name: e.target.value })} />
      <br />
      The current theme is : {theme} <br />
      <button onClick={() => themeToggle()}>Toggle</button>
      <div style={themeStyle[theme]}>
        This will change the text and background color
      </div>
    </div>
  );
};

export default Theme;
