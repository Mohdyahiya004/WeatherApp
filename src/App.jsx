// src/App.jsx
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load the Weather App
const WeatherApp = lazy(() => import("./WeatherApp/Weather"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-screen">
          <h1 className="text-2xl font-bold">Loading...</h1>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<WeatherApp />} />
        <Route path="*" element={<p className="text-center mt-10 text-2xl">404 - Page Not Found</p>} />
      </Routes>
    </Suspense>
  );
}

export default App;
// export default function App() {
//   return (
//     <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
//       <h1 className="text-5xl font-bold text-white">Tailwind is Working! 🚀</h1>
//     </div>
//   );
// }
