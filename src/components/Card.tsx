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
    <FontAwesomeIcon className="text-gray-700" icon={faCloudShowersHeavy} />
  ),
  cloud: <FontAwesomeIcon className="text-gray-700" icon={faCloud} />,
  wind: <FontAwesomeIcon className="text-gray-700" icon={faWind} />,
  clear: <FontAwesomeIcon className="text-blue-900" icon={faCloudMoon} />,
  lightning: <FontAwesomeIcon className="text-yellow-400" icon={faBolt} />,
};

const Card = ({ weather }: Props) => {
  const [clicked, setClicked] = useState(false);

  if (clicked) {
    return (
      <button
        onClick={() => {
          setClicked(!clicked);
        }}
        className="grid card shadow-md border-[0.7px] mb-7 mt-5 mx-1 py-5 px-8 rounded-md w-[17rem] h-[18rem]"
      >
        <p>{`Wind: ${weather.windSpeed}`}</p>
        <p>{`Wind Direction: ${weather.windDirection}`}</p>
        <p>{`Humidity: ${weather.relativeHumidity.value}%`}</p>
        {weather.probabilityOfPrecipitation.value && (
          <p>{`Chance of Percipitation: ${weather.probabilityOfPrecipitation.value}%`}</p>
        )}
      </button>
    );
  }
  return (
    <button
      onClick={() => {
        setClicked(!clicked);
      }}
      className="grid card shadow-md border-[0.7px] mb-7 mt-5 mx-1 py-5 px-8 rounded-md w-[17rem] h-[18rem]"
    >
      <h2 className="font-bold text-[2rem] text-left border-bottom">
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
