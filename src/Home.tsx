import { useEffect, useState } from "react";
import DropDown from "./components/DropDown";
import citiesMap, { City } from "./CitiesMap";
import Carousel from "./components/Carousel";
import NavBar from "./components/NavBar";

interface Results {
  properties: {
    forecast: string;
  };
}
export interface Results2 {
  properties: {
    geometry: [[[number]]];
    periods: [
      {
        name: string;
        temperature: number;
        shortForecast: string;
        icon: string;
        windSpeed: string;
        windDirection: string;
        relativeHumidity: { value: number };
        probabilityOfPrecipitation: { value: number };
        dewpoint: { value: number };
        detailedForecast: string;
      }
    ];
  };
}
export interface Weather {
  name: string;
  temperature: number;
  shortForecast: string;
  icon: string;
  windSpeed: string;
  windDirection: string;
  relativeHumidity: { value: number };
  probabilityOfPrecipitation: { value: number };
  dewpoint: { value: number };
  detailedForecast: string;
}

const Home = () => {
  const [city, setCity] = useState<City[]>();
  const [weather, setWeather] = useState<Results2>();
  const [error, setError] = useState<string>();
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const userTheme = localStorage.getItem("theme");

  // Get theme on page load
  useEffect(() => {
    if (userTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else document.documentElement.classList.remove("dark");
  }, [userTheme]);

  // Fetch Weather
  useEffect(() => {
    const getWeather = async () => {
      const url = city
        ? `https://api.weather.gov/points/${city[0].point}`
        : "https://api.weather.gov/points/40.730610,-73.935242";
      try {
        const res = await fetch(url);
        const data: Results = await res.json();

        const forecast = data.properties.forecast;
        const res2 = await fetch(forecast);
        const localWeather: Results2 = await res2.json();
        setWeather(localWeather);
      } catch (e) {
        setError("Something went wrong" + e);
      }
    };
    getWeather();
  }, [city]);

  if (error) return <p>{error}</p>;
  return (
    <div className={userTheme === "dark" ? "dark:bg-slate-900" : undefined}>
      <NavBar onChangeTheme={toggleTheme} userTheme={userTheme} />
      <main className="mx-10 my-6 dark:bg-[oklch(0.746477 0.0216 264.436)]">
        <div className="sm:flex">
          <h1 className="text-[1.6rem] dark:text-white sm:text-[2rem] mr-2 font-bold m-0 text-center sm:text-left">
            Weather Forecast
          </h1>
          <p className="text-[1.6rem] sm:text-[2rem] dark:text-white font-bold m-0 text-center sm:text-left">
            {city ? city[0].city : "New York"}
          </p>
        </div>
        <DropDown
          onSelect={(city) => setCity(citiesMap.filter((c) => c.city === city))}
        />
        <Carousel userTheme={userTheme} city={city!} weather={weather!} />
      </main>
    </div>
  );
};

export default Home;
