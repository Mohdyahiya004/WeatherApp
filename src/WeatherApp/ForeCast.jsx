// // import { useEffect, useState } from "react";

// // export default function ForeCast({ city }) {
// //   const [castData, setCastData] = useState({});
// //   const [loading, setLoading] = useState(true);

// //   const fetchforecastapi = async (currentCity) => {
// //     try {
// //       const response = await fetch(
// //         `http://api.weatherapi.com/v1/forecast.json?key=7aaa3c7e6d3d4bfca28123208250909&q=${currentCity}&days=7&aqi=no&alerts=no`
// //       );
// //       const jsonData = await response.json();
// //       setCastData(jsonData);
// //       setLoading(false);
// //     } catch (error) {
// //       alert(error + "");
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     if (city) {
// //       setLoading(true);
// //       fetchforecastapi(city);
// //     }
// //   }, [city]);

// //   if (loading) {
// //     return <p style={{ textAlign: "center" }}>Loading forecast...</p>;
// //   }

// //   return (
// //     <div style={{ fontFamily: "monospace", padding: "20px" }}>
// //       <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
// //         7-Day Forecast for {city}
// //       </h2>

// //       <div
// //         style={{
// //           display: "flex",
// //           justifyContent: "center",
// //           gap: "15px",
// //           flexWrap: "wrap",
// //         }}
// //       >
// //         {castData?.forecast?.forecastday?.map((day, index) => (
// //           <div
// //             key={index}
// //             style={{
// //               border: "1px solid #aaa",
// //               borderRadius: "8px",
// //               padding: "10px",
// //               textAlign: "center",
// //               width: "120px",
// //             }}
// //           >
// //             <p>{day.date}</p>
// //             <img src={day.day.condition.icon} alt={day.day.condition.text} />
// //             <p>{day.day.condition.text}</p>
// //             <p>Max: {day.day.maxtemp_c}°C</p>
// //             <p>Min: {day.day.mintemp_c}°C</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// import { useEffect, useState } from "react";
// import AOS from "aos";

// export default function ForeCast({ city }) {
//   const [castData, setCastData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [selectedDay, setSelectedDay] = useState(null); // 🔹 track which day is clicked

//   const fetchforecastapi = async (currentCity) => {
//     try {
//       const response = await fetch(
//         `http://api.weatherapi.com/v1/forecast.json?key=7aaa3c7e6d3d4bfca28123208250909&q=${currentCity}&days=7&aqi=no&alerts=no`
//       );
//       const jsonData = await response.json();
//       setCastData(jsonData);
//       setLoading(false);
//     } catch (error) {
//       alert(error + "");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (city) {
//       setLoading(true);
//       fetchforecastapi(city);
//     }
//   }, [city]);

//   if (loading) {
//     return <p style={{ textAlign: "center" }}>Loading forecast...</p>;
//   }

//   // useEffect(() => {
//   // AOS.init({
//   //   duration:1000,
//   //   once:false,
//   // });
//   // }, [])

//   return (
//     <div style={{ fontFamily: "monospace", padding: "20px" }} data-aos="fade-left" data-aos-delay="200">
//       <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
//         7-Day Forecast for {city}
//       </h2>

//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "15px",
//           flexWrap: "wrap",
//         }}
//       >
//         {castData?.forecast?.forecastday?.map((day, index) => (
//           <div
//             key={index}
//             style={{
//               border: "1px solid #aaa",
//               borderRadius: "8px",
//               padding: "10px",
//               textAlign: "center",
//               width: "120px",
//               cursor: "pointer",
//             }}
//             onClick={() => setSelectedDay(day)}

//           >
//             <p>{day.date}</p>
//             <img src={day.day.condition.icon} alt={day.day.condition.text} />
//             <p>{day.day.condition.text}</p>
//             <p>Max: {day.day.maxtemp_c}°C</p>
//             <p>Min: {day.day.mintemp_c}°C</p>
//           </div>
//         ))}
//       </div>

//       {selectedDay && (
//         <div style={{ marginTop: "20px" }}>
//           <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
//             Hourly Forecast for {selectedDay.date}
//           </h3>

//           <table
//             style={{
//               width: "100%",
//               maxWidth: "800px",
//               margin: "0 auto",
//               borderCollapse: "collapse",
//               fontFamily: "monospace",
//             }}
//           >
//             <thead>
//               <tr className="bg-white m-20px">
//                 <th className="border border-grey-200">Time</th>
//                 <th className="border border-grey-200">Temp (°C)</th>
//                 <th className="border border-grey-200">Condition</th>
//                 <th className="border border-grey-200">Icon</th>
//               </tr>
//             </thead>
//             <tbody>
//               {selectedDay.hour.map((h, i) => (
//                 <tr key={i}>
//                   <td className=" border border-#ccc-500 p-8px text-center">
//                     {h.time.split(" ")[1]}
//                   </td>
//                   <td className=" border border-#ccc-500 p-8px text-center">
//                     {h.temp_c}°C
//                   </td>
//                   <td className=" border border-#ccc-500 p-8px text-center">
//                     {h.condition.text}
//                   </td>
//                   <td className=" border border-#ccc-500 p-8px text-center">
//                     <img src={h.condition.icon} alt={h.condition.text} />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }
// src/WeatherApp/ForeCast.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedWeather from "./AnimatedWeather";
import WeatherCard from "./WeatherCard";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ForeCast({ city, darkMode }) {
  const [castData, setCastData] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState(null);

  const fetchForecastApi = async (currentCity) => {
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=7aaa3c7e6d3d4bfca28123208250909&q=${currentCity}&days=7&aqi=no&alerts=no`
      );
      const data = await res.json();
      setCastData(data);
      setLoading(false);
    } catch (error) {
      alert(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city) {
      setLoading(true);
      fetchForecastApi(city);
    }
  }, [city]);

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  const getCardColor = (condition) => {
    const cond = condition?.toLowerCase() || "";
    if (cond.includes("sun"))
      return "from-yellow-400 via-orange-400 to-red-500";
    if (cond.includes("cloud")) return "from-gray-400 via-gray-500 to-gray-600";
    if (cond.includes("rain")) return "from-blue-400 via-blue-500 to-blue-700";
    if (cond.includes("snow")) return "from-white via-gray-200 to-blue-100";
    return "from-gray-300 to-gray-500";
  };

  if (loading)
    return (
      <p className="text-center my-4 text-xl font-semibold">
        Loading forecast...
      </p>
    );

  // Framer Motion variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 12 },
    },
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-6">
      <h2
        className={`text-2xl font-bold text-center mb-6 ${
          darkMode ? "text-white" : "text-black"
        }`}
        data-aos="fade-up"
      >
        7-Day Forecast for {city}
      </h2>

      {/* 7-Day Forecast */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {castData?.forecast?.forecastday?.map((day) => (
          <motion.div
            key={day.date}
            className={`rounded-xl p-4 text-center cursor-pointer transition-all duration-300 
              ${
                darkMode
                  ? "text-white shadow-custom-cyan"
                  : "text-black shadow-md"
              }`}
            onClick={() => setSelectedDay(day)}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: `linear-gradient(to top right, ${getCardColor(
                day.day.condition.text
              )})`,
            }}
          >
            <p className="font-medium mb-2">{day.date}</p>
            <WeatherCard
              condition={day.day.condition.text}
              text={day.day.condition.text}
              bgGradient={getCardColor(day.day.condition.text)}
            />
            <p className="font-semibold mt-2">Max: {day.day.maxtemp_c}°C</p>
            <p className="font-semibold">Min: {day.day.mintemp_c}°C</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Hourly Forecast */}
      {selectedDay && (
        <div className="mt-8">
          <h3
            className={`text-xl font-bold mb-4 text-center ${
              darkMode ? "text-white" : "text-black"
            }`}
            data-aos="fade-up"
          >
            Hourly Forecast for {selectedDay.date}
          </h3>
          <motion.div className="flex overflow-x-auto gap-4 p-2">
            {selectedDay.hour.map((h) => (
              <motion.div
                key={h.time}
                className={`flex-shrink-0 w-28 p-4 rounded-xl text-center transition-all duration-300
                  ${
                    darkMode
                      ? "text-white shadow-custom-cyan"
                      : "text-black shadow-md"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 12 }}
                style={{
                  background: `linear-gradient(to top right, ${getCardColor(
                    h.condition.text
                  )})`,
                }}
              >
                <p className="font-semibold mb-1">{h.time.split(" ")[1]}</p>
                <AnimatedWeather condition={h.condition.text} size={60} />
                <p className="text-sm mb-1">{h.condition.text}</p>
                <p className="font-bold">{h.temp_c}°C</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
}
