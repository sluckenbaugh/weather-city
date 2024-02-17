import Card from "./Card";
import { Results2 } from "../Home";
import { SwiperSlide, Swiper } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "../index.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { SlideNext, SlidePrev } from "./SlideButton";

interface Props {
  weather: Results2;
}

const Carousel = ({ weather }: Props) => {
  return (
    <div className="mt-10">
      <Swiper
        spaceBetween={20}
        modules={[FreeMode, Pagination]}
        freeMode={true}
        pagination={{ clickable: true }}
        slidesPerView={4}
      >
        {weather?.properties.periods.map((p) => (
          <SwiperSlide key={p.name}>
            <Card weather={p} key={p.name}></Card>
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
