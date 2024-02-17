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
    periods: [
      {
        name: string;
        temperature: number;
        shortForecast: string;
        icon: string;
        windSpeed: string;
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
}

const Home = () => {
  const [city, setCity] = useState<City[]>();
  const [weather, setWeather] = useState<Results2>();
  const [error, setError] = useState<string>();

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
    <>
      <NavBar />
      <main className="mx-10 my-6">
        <h1 className="text-[2.5rem] font-bold m-0">
          {city
            ? `Weather Forecast ${city[0].city}`
            : "Weather Forecast New York"}
        </h1>
        <DropDown
          onSelect={(city) => setCity(citiesMap.filter((c) => c.city === city))}
        />
        <Carousel weather={weather!} />
      </main>
    </>
  );
};

export default Home;
