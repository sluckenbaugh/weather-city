import { faMoon, faSun, faUmbrella } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../index.css";

interface Props {
  onChangeTheme: () => void;
  userTheme: string | null;
}

const NavBar = ({ onChangeTheme, userTheme }: Props) => {
  return (
    <div className="flex justify-between p-[1rem] bg-slate-900 dark:bg-slate-900">
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
      <button
        onClick={() => onChangeTheme()}
        className="bg-none mr-3 text-white text-xl theme__btn"
      >
        {userTheme === "dark" ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : userTheme === "light" ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
      </button>
    </div>
  );
};

export default NavBar;
