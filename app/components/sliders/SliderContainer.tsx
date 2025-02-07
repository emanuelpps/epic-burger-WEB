"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface SliderImages {
  src: string;
  alt: string;
}
export const SliderContainer = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [sliderImages] = useState<SliderImages[]>([
    {
      src: "https://res.cloudinary.com/dehyuw4zu/image/upload/f_auto,q_auto/v1/Epic-burger/wfly6n4d36iwft1u3mfo",
      alt: "Epic Barbacoa 15% OFF",
    },
    {
      src: "https://res.cloudinary.com/dehyuw4zu/image/upload/f_auto,q_auto/v1/Epic-burger/rlcsm2bee3tdzky1vjng",
      alt: "Epic Combo 2x1",
    },
    {
      src: "https://res.cloudinary.com/dehyuw4zu/image/upload/f_auto,q_auto/v1/Epic-burger/otcql0jaf7mxq5m7sbux",
      alt: "Epic Crispy Onion 10% OFF",
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((prevSlide) => (prevSlide + 1) % sliderImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [sliderImages.length]);
  return (
    <div>
      <Image
        src={sliderImages[sliderIndex].src}
        width={1200}
        height={200}
        alt={sliderImages[sliderIndex].src}
        className="rounded-2xl"
      />
      <div id="dot-container" className="flex relative">
        <div className="absolute z-40 bottom-5 left-1/2 transform -translate-x-1/2 rounded-full flex gap-2">
          {sliderImages.map((_, index) => (
            <div
              key={index}
              className={`${
                sliderIndex === index ? "bg-white" : "bg-slate-400"
              } w-3 h-3 rounded-full`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
