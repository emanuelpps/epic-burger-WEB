"use client";
import { SliderContainer } from "@/app/components/sliders/SliderContainer";
import { useState, useEffect } from "react";

export const Slide = () => {
  const [slide, setSlide] = useState(0);
  const slides = [
    "https://res.cloudinary.com/dehyuw4zu/image/upload/f_auto,q_auto/1-min_fhwgaa",
    "https://res.cloudinary.com/dehyuw4zu/image/upload/f_auto,q_auto/2-min_sxeq6t",
    "https://res.cloudinary.com/dehyuw4zu/image/upload/f_auto,q_auto/3-min_fi8ikc",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <div className="mt-10">
      <SliderContainer />
      <div id="dot-container" className="flex relative">
        <div className="absolute z-40 bottom-5 left-1/2 transform -translate-x-1/2 rounded-full flex gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`${
                slide === index ? "bg-white" : "bg-slate-400"
              } w-3 h-3 rounded-full`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
