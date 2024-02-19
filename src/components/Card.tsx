import { Weather } from "../Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../index.css";
import {
  faSun,
  faSnowflake,
  faCloudShowersHeavy,
  faCloud,
  faWind,
  faCloudMoon,
  faCloudSun,
  faBolt,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface Props {
  weather: Weather;
}

const svgMap = {
  sun: <FontAwesomeIcon className="text-yellow-400" icon={faSun} />,
  sunCloud: <FontAwesomeIcon className="text-yellow-400" icon={faCloudSun} />,
  snow: <FontAwesomeIcon className="text-blue-300" icon={faSnowflake} />,
  rain: (
    <FontAwesomeIcon className="text-gray-600" icon={faCloudShowersHeavy} />
  ),
  cloud: <FontAwesomeIcon className="text-gray-600" icon={faCloud} />,
  wind: <FontAwesomeIcon className="text-gray-700" icon={faWind} />,
  clear: <FontAwesomeIcon className="text-blue-900" icon={faCloudMoon} />,
  lightning: <FontAwesomeIcon className="text-yellow-400" icon={faBolt} />,
  fog: <FontAwesomeIcon className="text-gray-400" icon={faSmog} />,
};

const Card = ({ weather }: Props) => {
  const [clicked, setClicked] = useState(false);

  if (clicked) {
    return (
      <button
        onClick={() => {
          setClicked(!clicked);
        }}
        className="grid card overflow-hidden mx-auto shadow-md border-[0.7px] mb-7 mt-5 mx-1 py-5 px-8 rounded-md w-[13rem] h-[18rem] md:w-[13.5rem] lg:w-[14rem] xl:w-[15rem]"
      >
        <div className="text-left leading-5 font-light grid gap-2 text-xs lg:text-[0.9rem]">
          <p className="font-bold text-lg mb-2">{weather.name}</p>
          <p className="bg-slate-200 p-1 rounded-md">{`Temperature: ${weather.temperature}°F`}</p>
          {weather.probabilityOfPrecipitation.value && (
            <p className="bg-slate-200 p-1 rounded-md">{`Chance of Percipitation: ${weather.probabilityOfPrecipitation.value}%`}</p>
          )}
          {/* Wind */}
          <div className="bg-slate-200 p-1 rounded-md">
            <p>{`Wind Speed: ${weather.windSpeed}`}</p>
            <p>{`Wind Direction: ${weather.windDirection}`}</p>
          </div>
          {/* humidity */}
          <div className="bg-slate-200 p-1 rounded-md">
            <p>{`Humidity: ${weather.relativeHumidity.value}%`}</p>
            <p>{`Dew Point: ${Math.floor(weather.dewpoint.value)}°C`}</p>
          </div>
        </div>
      </button>
    );
  }
  return (
    <button
      onClick={() => {
        setClicked(!clicked);
      }}
      className="grid card overflow-hidden mx-auto shadow-md border-[0.7px] mb-7 mt-5 mx-1 py-5 px-8 rounded-md w-[13rem] h-[18rem] md:w-[13.5rem] lg:w-[14rem] xl:w-[15rem]"
    >
      <h2 className="font-bold text-[1.4rem] text-left lg:text-[1.5rem] xl:text-[1.7rem]">
        {weather.name}
      </h2>
      <div className="flex">
        <p className="text-[2.3rem]">{`${weather.temperature}°`}</p>
        <div className="ml-5 text-[2.3rem]">
          {weather.shortForecast.includes("Partly") &&
          weather.name.toLowerCase().includes("night")
            ? svgMap.clear
            : weather.shortForecast.includes("Partly")
            ? svgMap.sunCloud
            : weather.shortForecast.includes("Snow")
            ? svgMap.snow
            : weather.shortForecast.includes("Sun")
            ? svgMap.sun
            : weather.shortForecast.includes("Rain")
            ? svgMap.rain
            : weather.shortForecast.includes("Cloud")
            ? svgMap.cloud
            : weather.shortForecast.includes("Wind")
            ? svgMap.wind
            : weather.shortForecast.includes("Clear")
            ? svgMap.clear
            : weather.shortForecast.includes("Lightning")
            ? svgMap.lightning
            : weather.shortForecast.includes("Fog")
            ? svgMap.fog
            : null}
        </div>
      </div>
      <p className="first font-[200] bg-slate-200 flex text-center justify-center items-center py-1 px-3 rounded-md">
        {weather.shortForecast}
      </p>
    </button>
  );
};

export default Card;
