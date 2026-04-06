<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->
🌦️ Weather Application

A modern and responsive weather application built using React + Vite.
It provides real-time weather updates with smooth animations and a clean UI.

🚀 Features
🌍 Search weather by city
🌡️ Real-time temperature & conditions
🎨 Beautiful UI with Tailwind CSS
🎞️ Animated weather icons (Lottie)
📱 Fully responsive design
⚡ Fast performance using Vite
🔔 Toast notifications
🛠️ Tech Stack
Frontend: React
Build Tool: Vite
Styling: Tailwind CSS
Animations: Lottie, Framer Motion
Routing: React Router
Notifications: React Toastify
📂 Project Structure
weatherappli/
│── src/
│   ├── WeatherApp/
│   │   ├── AnimatedWeather.jsx
│   │   ├── WeatherCard.jsx
│   │   ├── Weather.jsx
│   │   ├── ForeCast.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── header.jsx
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── package.json
⚙️ Installation & Setup
1️⃣ Clone the repository
git clone <https://github.com/Mohdyahiya004/WeatherApp.git>
cd weatherappli
2️⃣ Install dependencies
npm install
3️⃣ Run the development server
npm run dev

👉 Open:

http://localhost:5173/
🎨 Tailwind Setup

Make sure your index.css includes:

@tailwind base;
@tailwind components;
@tailwind utilities;
🌐 API Integration

This app uses a weather API to fetch real-time data.
(Add your API details here if needed)

Example:

API: OpenWeatherMap (or your API)
📸 Screenshots

(Add screenshots here if you want)

🧪 Future Improvements
🌙 Dark mode toggle
📍 Location-based weather
📊 Detailed forecast charts
💾 Save favorite cities
🤝 Contributing

Feel free to fork this project and contribute!

📄 License

This project is open source and available under the MIT License.

💡 Author

Mohammed Yahiya