import { createContext, useState, useContext } from "react";

export const ThemeContext = createContext(null);

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const themeStyle = {
    light: { color: "black", backgroundColor: "white" },
    dark: { color: "white", backgroundColor: "black" },
  };
  const themeToggle = () => {
    const themeStyle = theme === "light" ? "dark" : "light";
    setTheme(themeStyle);
  };
  return (
    <ThemeContext.Provider value={{ theme, themeStyle, themeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("Context is not wrapped properly");
  const { theme, themeStyle, themeToggle } = context;
  return { theme, themeStyle, themeToggle };
};
