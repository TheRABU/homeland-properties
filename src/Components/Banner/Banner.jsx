// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/TYfjF8v/estate1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/swc1Svk/estate2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/gt7hWtp/estate3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/DKWDwJ6/estate4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/vhq1Z2h/estate5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/JmsKYPH/estate6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/N2jhJw4/estate7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/yyMpKfz/estate8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/Jd7w1yL/estate9.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
