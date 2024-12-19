"use client";
import { useState } from "react";

interface SliderImages {
  src: string;
  alt: string;
}
const SliderContainer = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [sliderImages] = useState<SliderImages[]>([
    {
      src: "/assets/images/burger-1.png",
      alt: "Epic Barbacoa 15% OFF",
    },
    {
      src: "/assets/images/burger-2.png",
      alt: "Epic Combo 2x1",
    },
    {
      src: "/assets/images/burger-3.png",
      alt: "Epic Crispy Onion 10% OFF",
    },
  ]);
  return <div>SliderContainer</div>;
};
