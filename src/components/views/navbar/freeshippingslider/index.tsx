import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "./slider.css";

export default function FreeShippingSlider() {
  SwiperCore.use([Autoplay]);

  const slidesContent = Array.from({ length: 7 }, (_, index) => (
    <SwiperSlide key={index}>
      <p>Free shipping on all orders above $100</p>
    </SwiperSlide>
  ));

  return (
    <div className={`py-2 bg-gray-800 `}>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        breakpoints={{
          320: {
            speed: 12000,
          },
          768: {
            speed: 20000,
          },
          1024: { speed: 35000 },
        }}
        className="absolute top-0 left-0 z-50 w-full text-stone-100 text-xs md:text-base lg:text-xs text-center swiper-container-free-mode tracking-wider"
      >
        {slidesContent}
      </Swiper>
    </div>
  );
}
