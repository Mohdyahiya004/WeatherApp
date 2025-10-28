import Lottie from "lottie-react";
import sunny from "../assets/sunny.json";
import rainy from "../assets/rainy icon.json";
import cloudy from "../assets/clouds.json";
import snow from "../assets/snow icon.json";

export default function AnimatedWeather({ condition = "sunny", size = 80 }) {
  // Provide default value "sunny" in case condition is undefined
  const cond = (condition || "sunny").toLowerCase();

  let animation;
  if (cond.includes("sun")) animation = sunny;
  else if (cond.includes("rain")) animation = rainy;
  else if (cond.includes("cloud")) animation = cloudy;
  else if (cond.includes("snow")) animation = snow;
  else animation = sunny;

  return (
    <Lottie animationData={animation} loop={true} style={{ height: size }} />
  );
}
