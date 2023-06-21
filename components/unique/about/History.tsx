"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const SwipeToSlide: React.FC = () => {
  const settings = {
    className: "centerHistory",
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 4,
    swipeToSlide: true,
    afterChange: function (index: number) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  return (
    <div className="history">
      <Slider {...settings}>
        <Card year="2019" />
        <Card year="2020" />
        <Card year="2021" />
        <Card year="2022" />
        <Card year="2023" />
      </Slider>
    </div>
  );
};

export default SwipeToSlide;

const Card = ({ year }: any) => {
  return (
    <div className="pt-[4rem]  ">
      <div className="bg-primary text-center relative h-[20px] w-full mb-[3rem] mx-[3rem]">
        <div className="text-[#fff] absolute border-[4px] h-[7rem] w-[7rem] left-[50%] translate-x-[-50%] top-0 translate-y-[-40%] rounded-full center bg-primary">
          {year}
        </div>
      </div>
      <div className="flex flex-col items-start gap-2 px-10">
        <Image
          src="/assets/about/history.png"
          alt="history"
          width={800}
          height={800}
          className="w-full h-auto"
        />
        <h4 className="heading-four">{year}</h4>
        <p className="text-small">
          By being available to our clients, we can respond to their concerns
          and questions and carry out our duty for keeping our clients
          up-to-date about the case.
        </p>
      </div>
    </div>
  );
};
