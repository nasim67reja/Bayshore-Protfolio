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
  beforeChange?: (oldIndex: number, newIndex: number) => void;
  afterChange?: (currentIndex: number) => void;
}

const FocusOnSelect: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings: Settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    centerMode: true,
    centerPadding: "0px",
    beforeChange: (current: number, next: number) => setActiveSlide(next),
    afterChange: (current: number) => setActiveSlide(current),
  };
  return (
    <>
      <div>
        {/* Display additional content for the active slide here */}
        {activeSlide === 0 && <p>Content for slide 1</p>}
        {activeSlide === 1 && <p>Content for slide 2</p>}
        {activeSlide === 2 && <p>Content for slide 3</p>}
        {activeSlide === 3 && <p>Content for slide 4</p>}
        {activeSlide === 4 && <p>Content for slide 5</p>}

        {/* Add more conditions here for additional slides */}
      </div>

      <div className=" max-w-[400px] mx-auto">
        <Slider {...settings}>
          <div className="">
            <Image alt="test" src="/assets/dot-0.png" height={70} width={70} />
          </div>
          <div>
            <Image alt="test" src="/assets/dot-1.png" height={70} width={70} />
          </div>
          <div>
            <Image alt="test" src="/assets/dot-2.png" height={70} width={70} />
          </div>
          <div>
            <Image alt="test" src="/assets/dot-3.png" height={70} width={70} />
          </div>
          <div>
            <Image alt="test" src="/assets/dot-4.png" height={70} width={70} />
          </div>
        </Slider>
      </div>

      <div>
        {/* Display additional content for the active slide here */}
        {activeSlide === 0 && <p>Content for slide 1</p>}
        {activeSlide === 1 && <p>Content for slide 2</p>}
        {activeSlide === 2 && <p>Content for slide 3</p>}
        {activeSlide === 3 && <p>Content for slide 4</p>}
        {activeSlide === 4 && <p>Content for slide 5</p>}

        {/* Add more conditions here for additional slides */}
      </div>
    </>
  );
};

export default FocusOnSelect;
