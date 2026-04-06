import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import ForeCast from "./ForeCast";
import AOS from "aos";
import "aos/dist/aos.css";
import WeatherCard from "./WeatherCard";
import { motion } from "framer-motion";

export default function Weather() {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


  const [city, setCity] = useState("");
  const [cityDebounce] = useDebounce(city, 500);
  const [weather, setWeather] = useState({});
  const [suggestion, setSuggestion] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const fetchWeather = async (currentCity) => {
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${currentCity}&aqi=no`
      );
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      alert(err);
    }
  };

  const fetchSuggestion = async () => {
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${cityDebounce}`
      );
      const data = await res.json();
      setSuggestion(data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    fetchWeather("Mumbai");
  }, []);
  useEffect(() => {
    if (city) fetchSuggestion();
  }, [cityDebounce]);
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  const slideDownVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <div
      className={`min-h-screen p-4 flex flex-col items-center transition-colors duration-500 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-b from-sky-400 to-[#f0f8ff] text-gray-900"
      }`}
    >
      {/* Light/Dark Mode Button */}
      <motion.button
        onClick={() => setDarkMode(!darkMode)}
        className={`mb-4 px-4 py-2 rounded-full font-semibold ${
          darkMode ? "bg-yellow-400 text-gray-900" : "bg-gray-800 text-white"
        }`}
        variants={slideDownVariant}
        initial="hidden"
        animate="visible"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </motion.button>

      {/* City Input */}
      <motion.div
        className="flex flex-wrap justify-center items-center gap-2 w-full max-w-md mx-auto mb-6"
        variants={slideDownVariant}
        initial="hidden"
        animate="visible"
      >
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city or country"
          className={`flex-1 border-2 rounded-2xl p-3 ${
            darkMode
              ? "border-gray-600 bg-gray-900 text-white placeholder-gray-300"
              : "border-red-500 bg-white text-gray-900 placeholder-gray-700"
          }`}
        />
        <button
          onClick={() => {
            fetchWeather(city);
            setSuggestion([]);
          }}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-2xl transition"
        >
          Submit
        </button>
      </motion.div>

      {/* Suggestions */}
      <div className="flex flex-col items-center w-full max-w-md mx-auto">
        {Array.isArray(suggestion) &&
          suggestion.map((item) => (
            <li
              key={item.id || item.name}
              onClick={() => {
                setCity(`${item.name}, ${item.country}`);
                setSuggestion([]);
                fetchWeather(`${item.name}, ${item.country}`);
              }}
              className="cursor-pointer w-full text-center px-4 py-2 my-1 rounded-md bg-gray-200 dark:bg-gray-500 dark:hover:text-black hover:text-red-600 transition"
            >
              {item.name}, {item.country}
            </li>
          ))}
      </div>

      {/* Current Weather */}
      {weather?.location && (
        <motion.div
          className={`w-full max-w-md p-4 rounded-xl shadow-md flex flex-col items-center gap-4 transition-colors duration-500 ${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
          }`}
          data-aos="fade-right"
          variants={slideDownVariant}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-xl font-bold underline">Location Details</h2>
          <p>
            <strong>Country:</strong> {weather.location.country}
          </p>
          <p>
            <strong>Region:</strong> {weather.location.region}
          </p>
          <p>
            <strong>City:</strong> {weather.location.name}
          </p>
          <p>
            <strong>Local Time:</strong> {weather.location.localtime}
          </p>

          <div className="flex flex-wrap justify-center gap-2 w-full">
            <WeatherCard
              icon={weather.current.condition.icon}
              text={weather.current.condition.text}
              bgGradient="from-yellow-400 to-red-500"
            />
          </div>
        </motion.div>
      )}

      {/* Forecast */}
      <ForeCast
        city={weather?.location?.name || "Mumbai"}
        darkMode={darkMode}
      />
    </div>
  );
}
