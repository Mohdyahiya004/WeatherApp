 function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition"
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
export default ThemeToggle;