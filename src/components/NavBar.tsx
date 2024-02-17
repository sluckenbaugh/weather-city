import { faUmbrella } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  return (
    <div className="p-[1rem] bg-slate-700">
      <div>
        <FontAwesomeIcon
          className="text-[1.3rem] text-white mr-2"
          icon={faUmbrella}
        />
        <p className="inline font-bold text-[1.1rem] text-white uppercase">
          weather
        </p>
        <p className="inline font-bold text-[1.1rem] text-blue-500">.</p>
        <p className="inline font-bold text-[1.1rem] text-white">city</p>
      </div>
    </div>
  );
};

export default NavBar;
