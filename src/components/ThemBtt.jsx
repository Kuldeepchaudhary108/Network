import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaDesktop } from "react-icons/fa";

export default function ThemBtt() {
  const [themeMode, setThemeMode] = useState(() => {
    // Check localStorage for stored theme preference or default to 'system'
    return localStorage.getItem("theme");
  });

  const [isOpen, setIsOpen] = useState(false);

  const applyTheme = (mode) => {
    const root = document.documentElement;
    if (mode === "light") {
      root.classList.remove("dark");
    } else if (mode === "dark") {
      root.classList.add("dark");
    }
  };

  useEffect(() => {
    applyTheme(themeMode);
  }, [themeMode]);

  const handleThemeChange = (mode) => {
    setThemeMode(mode);
    localStorage.setItem("theme", mode);
    applyTheme(mode);
    setIsOpen(false);
  };

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center"
        onClick={toggleOptions}
      >
        {themeMode === "light" ? (
          <FaSun className="mr-2" />
        ) : themeMode === "dark" ? (
          <FaMoon className="mr-2" />
        ) : (
          <FaDesktop className="mr-2" />
        )}
        {}
      </button>

      {isOpen && (
        <div className="absolute z-10 bg-gray-800 text-white rounded-lg mt-2 w-48 shadow-lg">
          <ul className="space-y-1">
            <li
              className={`flex items-center space-x-3 p-2 rounded-md cursor-pointer hover:bg-gray-700 transition-colors 
              ${themeMode === "light" ? "bg-gray-700" : ""}`}
              onClick={() => handleThemeChange("light")}
            >
              <FaSun className="text-yellow-400" />
              <span className="text-white">Light</span>
            </li>
            <li
              className={`flex items-center space-x-3 p-2 rounded-md cursor-pointer hover:bg-gray-700 transition-colors 
              ${themeMode === "dark" ? "bg-gray-700" : ""}`}
              onClick={() => handleThemeChange("dark")}
            >
              <FaMoon className="text-gray-400" />
              <span className="text-white">Dark</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
