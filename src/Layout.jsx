import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import ThemeBtn from "./components/ThemBtt";
import { ThemeProvider } from "./components/Them";
function Layout() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };
  // actual theme change

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="">{<Outlet />}</div>
    </ThemeProvider>
  );
}

export default Layout;
