"use client";
import Image from "next/image";
import { useState } from "react";

interface SliderImages {
  src: string;
  alt: string;
}
export const SliderContainer = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [sliderImages] = useState<SliderImages[]>([
    {
      src: "https://res.cloudinary.com/dkgoszhfr/image/upload/f_auto,q_auto/dnpe7v3yrv4jt1nibv2z",
      alt: "Epic Barbacoa 15% OFF",
    },
    {
      src: "https://res.cloudinary.com/dkgoszhfr/image/upload/f_auto,q_auto/tswrdyuk6loftbctawob",
      alt: "Epic Combo 2x1",
    },
    {
      src: "https://res.cloudinary.com/dkgoszhfr/image/upload/f_auto,q_auto/cealezbvw7qh4qvt6lhy",
      alt: "Epic Crispy Onion 10% OFF",
    },
  ]);
  return (
    <div>
      <Image
        src={sliderImages[sliderIndex].src}
        width={500}
        height={200}
        alt={sliderImages[sliderIndex].src}
      />
    </div>
  );
};
