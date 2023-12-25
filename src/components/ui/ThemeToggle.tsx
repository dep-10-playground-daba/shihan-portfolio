import { useEffect, useState } from "preact/hooks";

export function ThemeToggle(){
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") ?? "light";
    }
    return "light";
  });

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <button onClick={handleClick}>{theme === "light" ? "🌙" : "🌞"}</button>
  );
}
