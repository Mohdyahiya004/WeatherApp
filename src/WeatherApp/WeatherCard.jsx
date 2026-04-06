// function WeatherCard({ text, icon }) {
//   return (
//     <div
//       style={{
//         padding: "10px",
//         margin: "5px",
//         display: "flex",
//         flexWrap:"flex-wrap",
//         flexDirection: "row",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: "12px",
//         border: "1px solid blue",
//         borderRadius: "12px",
//       }}
//     >
//       <div >
//         <img src={icon} />
//       <p className="text-center">{text}</p>
//       </div>

//     </div>
//   );
// }

// export default WeatherCard;
import AnimatedWeather from "./AnimatedWeather";
import { motion } from "framer-motion";

export default function WeatherCard({
  condition,
  text,
  bgGradient = "from-gray-300 to-gray-500",
  size = 80,
}) {
  return (
    <motion.div
      className={`flex flex-col  justify-center  items-center p-4 rounded-xl shadow-md text-white bg-gradient-to-tr ${bgGradient}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
    >
      <AnimatedWeather condition={condition} size={size} />
      <p className="mt-2 font-semibold text-center">{text}</p>
    </motion.div>
  );
}
