import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  
  const savedTheme = localStorage.getItem("theme") || "light";

  const [theme, setTheme] = useState(savedTheme);
  //  current theme ,  changetheme  


    
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "light" ? "light-mode" : "dark-mode"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
