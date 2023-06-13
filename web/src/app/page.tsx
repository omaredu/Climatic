import axios from "axios";

import WeatherCard from "@/components/weather-card";
import Logo from "@/components/logo";

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
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "44b81114cf9fdb8f0d8bed2f3e7e6f30";

  const { data } = await axios.get<WeatherData>(API_URL, {
    params: {
      lat: 25.686613,
      lon: -100.316116,
      units: "metric",
      lang: "es",
      appid: API_KEY,
    },
  });

  return data;
};

export default async function Home() {
  const weatherData = await getWeather();

  return (
    <main className="h-screen flex flex-col bg-background">
      <header className="grid sm:hidden place-items-center p-[30px] border-t-[5px] border-primary">
        <Logo />
      </header>
      <div className="flex items-center justify-center flex-1">
        <section>
          <div className="my-5 hidden sm:block">
            <Logo />
          </div>
          <WeatherCard
            current={weatherData.main.temp ?? 0}
            max={weatherData.main.temp_max ?? 0}
            min={weatherData.main.temp_min ?? 0}
            status={weatherData.weather[0].description ?? "Indefinido"}
          />
        </section>
      </div>
      <footer className="p-[40px]">
        <p className="text-center text-light">
          &copy; 2025 Climatic Inc. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}
