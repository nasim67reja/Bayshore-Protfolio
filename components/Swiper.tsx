"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";

const App: React.FC = () => {
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);
  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    progressCircle.current?.style.setProperty("--progress", `${1 - progress}`);
    // progressContent.current!.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        slidesPerView={3}
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          // delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<img src="assets/dot-${index}.png" class="${className}" style="height: 100px; width: 95px;">`;
          },
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/assets/trip.png"
            alt="marketing"
            width={1200}
            height={1200}
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/trip.png"
            alt="marketing"
            width={1200}
            height={1200}
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/trip.png"
            alt="marketing"
            width={1200}
            height={1200}
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/trip.png"
            alt="marketing"
            width={1200}
            height={1200}
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/trip.png"
            alt="marketing"
            width={1200}
            height={1200}
            className="w-full h-auto"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default App;
