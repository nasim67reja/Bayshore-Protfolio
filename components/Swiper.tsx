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
            return `<img src="assets/dot-${index}.png" class="${className}" style="height: 60px; width: 55px;">`;
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
          <div className="content">
            <h3 className="heading-tertiary">Trip Law</h3>
            <p className="mb-2 font-semibold">Immigration Lawyer</p>
            <p className="text-link">
              Swop’s Flat Rectangle NFC’s are designed to be durable and simple
              to use. The Flat is great to put under any phone case(non-metal)
              Users can download our app to program any of our NFC’s with the
              click of a button. This will attach your profile to the NFC for
              easy sharing. You just tap the NFC on any compatible phone to
              share your digital business card.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/trip.png"
            alt="marketing"
            width={1200}
            height={1200}
            className="w-full h-auto"
          />
          <div className="content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
            ipsam, eligendi officiis esse ratione, nobis recusandae accusantium
            animi blanditiis veritatis pariatur dignissimos consequuntur debitis
            repellendus molestias error ipsa velit quos.
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/trip.png"
            alt="marketing"
            width={1200}
            height={1200}
            className="w-full h-auto"
          />
          <div className="content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
            ipsam, eligendi officiis esse ratione, nobis recusandae accusantium
            animi blanditiis veritatis pariatur dignissimos consequuntur debitis
            repellendus molestias error ipsa velit quos.
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/trip.png"
            alt="marketing"
            width={1200}
            height={1200}
            className="w-full h-auto"
          />
          <div className="content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
            ipsam, eligendi officiis esse ratione, nobis recusandae accusantium
            animi blanditiis veritatis pariatur dignissimos consequuntur debitis
            repellendus molestias error ipsa velit quos.
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/trip.png"
            alt="marketing"
            width={1200}
            height={1200}
            className="w-full h-auto"
          />
          <div className="content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
            ipsam, eligendi officiis esse ratione, nobis recusandae accusantium
            animi blanditiis veritatis pariatur dignissimos consequuntur debitis
            repellendus molestias error ipsa velit quos.
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default App;
