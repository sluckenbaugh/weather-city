import { weather } from "../Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faSnowflake,
  faCloudShowersHeavy,
  faCloud,
  faWind,
  faCloudMoon,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  weather: weather;
}

const svgMap = {
  sun: <FontAwesomeIcon icon={faSun} />,
  snow: <FontAwesomeIcon icon={faSnowflake} />,
  rain: <FontAwesomeIcon icon={faCloudShowersHeavy} />,
  cloud: <FontAwesomeIcon icon={faCloud} />,
  wind: <FontAwesomeIcon icon={faWind} />,
  clear: <FontAwesomeIcon icon={faCloudMoon} />,
};

const Card = ({ weather }: Props) => {
  return (
    <div className="grid shadow border-2 m-3 py-5 px-3 rounded-md">
      <h2 className="font-bold text-xl text-left">{weather.name}</h2>
      <div className="flex">
        <p className="text-xl">{`${weather.temperature}°`}</p>
        <div className="ml-5 text-xl">
          {weather.shortForecast.includes("Sun")
            ? svgMap.sun
            : weather.shortForecast.includes("Snow")
            ? svgMap.snow
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
      <p>{weather.shortForecast}</p>
    </div>
  );
};

export default Card;
