import Card from "./Card";
import { Results2 } from "../HomePage";
import { SwiperSlide, Swiper } from "swiper/react";
import { FreeMode, Mousewheel, Navigation, Pagination } from "swiper/modules";
import "../index.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { SlideNext, SlidePrev } from "./SlideButton";
import { City } from "../CitiesMap";

interface Props {
  weather: Results2;
  city: City[];
  userTheme: string | null;
}

const Carousel = ({ weather, city, userTheme }: Props) => {
  return (
    <div className="mt-10">
      <Swiper
        className={userTheme === "dark" ? "dark" : undefined}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          550: {
            slidesPerView: 2,
          },
          750: {
            slidesPerView: 3,
          },
          980: {
            slidesPerView: 4,
          },
          1440: {
            slidesPerView: 5,
          },
          1900: {
            slidesPerView: 6,
          },
        }}
        modules={[FreeMode, Pagination, Navigation, Mousewheel]}
        spaceBetween={20}
        mousewheel={true}
        navigation={true}
        freeMode={true}
        pagination={true}
        slidesPerView={4}
      >
        {weather?.properties.periods.map((p, index) => (
          <SwiperSlide
            className={userTheme === "dark" ? "dark" : undefined}
            key={p.name}
          >
            <Card
              weather={p}
              key={city ? `${city[0].city} ${index}` : `New York ${index}`}
            ></Card>
          </SwiperSlide>
        ))}
        <div className="flex justify-between">
          <SlidePrev />
          <SlideNext />
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
