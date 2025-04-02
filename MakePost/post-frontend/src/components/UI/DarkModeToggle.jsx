import { useState } from "react";

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        document.body.classList.toggle("dark");
        setDarkMode(!darkMode);
    };

    return (
        <button
            onClick={toggleTheme}
            className="cursor-pointer"
        >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
    );
};

export default DarkModeToggle;
