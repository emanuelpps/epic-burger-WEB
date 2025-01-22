import Image from "next/image";
import React from "react";

export const Slide = () => {
  return (
    <div>
      <Image
        src="https://res.cloudinary.com/dehyuw4zu/image/upload/f_auto,q_auto/1-min_fhwgaa"
        alt="burger promo barbacoa"
        width={900}
        height={600}
        className="object-cover rounded-3xl"
      />
    </div>
  );
};
