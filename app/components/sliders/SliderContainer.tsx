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
  return (
    <div>
      <Image
        src={sliderImages[sliderIndex].src}
        width={1200}
        height={200}
        alt={sliderImages[sliderIndex].src}
      />
    </div>
  );
};
