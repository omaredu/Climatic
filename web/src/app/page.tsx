interface WeatherData {
  weather: {
    description: string;
  }[];
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
}

const getWeather = async () => {
  // 📄: https://openweathermap.org/current
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "44b81114cf9fdb8f0d8bed2f3e7e6f30";

  // ... Here goes the magic to get the weather
};

export default function Home() {
  return <main>{/* ... 👨‍💻 */}</main>;
}
