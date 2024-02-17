import Card from "./Card";
import { Results2 } from "../Home";
import { SwiperSlide, Swiper } from "swiper/react";
import { FreeMode, Mousewheel, Navigation, Pagination } from "swiper/modules";
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
        modules={[FreeMode, Pagination, Navigation, Mousewheel]}
        spaceBetween={20}
        mousewheel={true}
        navigation={true}
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
