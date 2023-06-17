"use client";
import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface Settings {
  focusOnSelect: boolean;
  infinite: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  speed: number;
  centerMode: boolean;
  centerPadding: string;
  arrows: boolean;
}

const FocusOnSelect: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlides, setActiveSlides] = React.useState([4, 0, 1]);
  const numberOfSlides = 5;

  const settings: Settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
  };
  const settings2: Settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
  };

  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  return (
    <>
      <div className="flex justify-center items-center mt-[8rem] mb-[5rem] gap-[6.5rem]">
        {/* <div>{`${slides[activeSlides[0]]}`}</div> */}
        {activeSlides[0] === -1 ? (
          <div className="">
            {/* {slides[4]} */}

            <Image
              src={slides[4]}
              alt="trip-law"
              width={1000}
              height={1000}
              className="w-[350px] h-auto"
            />
          </div>
        ) : (
          <div className="">
            {/* {slides[activeSlides[0]]} */}
            <Image
              src={slides[activeSlides[0]]}
              alt="trip-law"
              width={1000}
              height={1000}
              className="w-[350px] h-auto"
            />
          </div>
        )}
        {/* middle */}
        <div className="custom-shadow  scale-125  ">
          {/* {slides[activeSlides[1]]} */}
          <Image
            src={slides[activeSlides[1]]}
            alt="trip-law"
            width={1000}
            height={1000}
            className="w-[350px] h-auto"
          />
        </div>

        {/* right */}
        {activeSlides[2] === 5 ? (
          <div className="">
            {/* {slides[0]} */}
            <Image
              src={slides[0]}
              alt="trip-law"
              width={1000}
              height={1000}
              className="w-[350px] h-auto"
            />
          </div>
        ) : (
          <div className="">
            {/* {slides[activeSlides[2]]} */}
            <Image
              src={slides[activeSlides[2]]}
              alt="trip-law"
              width={1000}
              height={1000}
              className="w-[350px] h-auto"
            />
          </div>
        )}
      </div>

      <Slider
        asNavFor={nav2}
        ref={(slider: Slider) => setNav1(slider)}
        {...settings2}
      >
        <Image
          src={slides[0]}
          alt="trip-law"
          width={1000}
          height={1000}
          className="w-[350px] h-auto"
        />
        <Image
          src={slides[1]}
          alt="trip-law"
          width={1000}
          height={1000}
          className="w-[350px] h-auto"
        />
        <Image
          src={slides[2]}
          alt="trip-law"
          width={1000}
          height={1000}
          className="w-[350px] h-auto"
        />
        <Image
          src={slides[3]}
          alt="trip-law"
          width={1000}
          height={1000}
          className="w-[350px] h-auto"
        />
        <Image
          src={slides[4]}
          alt="trip-law"
          width={1000}
          height={1000}
          className="w-[350px] h-auto"
        />
      </Slider>

      <div className="testimonial-slider max-w-[470px] mx-auto ">
        <Slider
          {...settings}
          asNavFor={nav1}
          ref={(slider: Slider) => setNav2(slider)}
        >
          <div className="">
            <Image
              alt="test"
              src="/assets/dot-0.png"
              height={120}
              width={120}
            />
          </div>
          <div>
            <Image
              alt="test"
              src="/assets/dot-1.png"
              height={120}
              width={120}
            />
          </div>
          <div>
            <Image
              alt="test"
              src="/assets/dot-2.png"
              height={120}
              width={120}
            />
          </div>
          <div>
            <Image
              alt="test"
              src="/assets/dot-3.png"
              height={120}
              width={120}
            />
          </div>
          <div>
            <Image
              alt="test"
              src="/assets/dot-4.png"
              height={120}
              width={120}
            />
          </div>
        </Slider>
      </div>

      <div>
        {/* <Slider {...settings}>
          <BoxContent content="1" />
          <BoxContent content="2" />
          <BoxContent content="3" />
          <BoxContent content="4" />
          <BoxContent content="5" />
        </Slider> */}
        {activeSlides[1] === 0 && <BoxContent content="1" />}
        {activeSlides[1] === 1 && <BoxContent content="2" />}
        {activeSlides[1] === 2 && <BoxContent content="3" />}
        {activeSlides[1] === 3 && <BoxContent content="4" />}
        {activeSlides[1] === 4 && <BoxContent content="5" />}
      </div>
    </>
  );
};

export default FocusOnSelect;

interface demo {
  content: string;
}
const BoxContent = ({ content }: demo) => {
  return (
    <div className="fade-in-animation max-w-[650px] mx-auto mt-[3rem] flex flex-col items-center">
      <h3 className="heading-tertiary ">Trip Law {content}</h3>
      <p className="mb-4 font-semibold">Immigration Lawyer {content}</p>
      <p className="text-link !text-center">
        Swop’s Flat Rectangle NFC’s are designed to be durable and simple to
        use. The Flat is great to put under any phone case(non-metal) Users can
        download our app to program any of our NFC’s with the click of a button.
        This will attach your profile to the NFC for easy sharing. You just tap
        the NFC on any compatible phone to share your digital business card.
      </p>
    </div>
  );
};

const slides: string[] = [
  "/assets/tab-1.png",
  "/assets/trip.png",
  "/assets/tab-1.png",
  "/assets/trip.png",
  "/assets/trip.png",
];
