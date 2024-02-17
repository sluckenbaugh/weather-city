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
} from "@fortawesome/free-solid-svg-icons";

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
};

const Card = ({ weather }: Props) => {
  return (
    <div className="grid shadow-md border-[0.7px] mb-7 py-5 px-8 rounded-md w-[17rem] h-[18rem]">
      <h2 className="font-bold text-[2rem] text-left border-bottom">
        {weather.name}
      </h2>
      <div className="flex">
        <p className="text-[2.3rem]">{`${weather.temperature}°`}</p>
        <div className="ml-5 text-[2.3rem]">
          {weather.shortForecast.includes("Partly")
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
            : null}
        </div>
      </div>
      <p className="first font-[200] bg-slate-200 flex text-center justify-center items-center py-1 px-3 rounded-md">
        {weather.shortForecast}
      </p>
    </div>
  );
};

export default Card;
