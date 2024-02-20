import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSwiper } from "swiper/react";

export const SlideNext = () => {
  const swiper = useSwiper();

  return (
    <div className="p-2">
      <button
        onClick={() => swiper.slideNext()}
        className="btn bg-white dark:bg-slate-900 shadow w-[3rem] h-[3rem] rounded-[50%]"
      >
        <FontAwesomeIcon
          className="text-[1.6rem] dark:text-white"
          icon={faChevronRight}
        />
      </button>
    </div>
  );
};

export const SlidePrev = () => {
  const swiper = useSwiper();
  return (
    <div className="p-2">
      <button
        onClick={() => swiper.slidePrev()}
        className="btn bg-white dark:bg-slate-900 shadow w-[3rem] h-[3rem] rounded-[50%]"
      >
        <FontAwesomeIcon
          className="text-[1.6rem] dark:text-white"
          icon={faChevronLeft}
        />
      </button>
    </div>
  );
};
