import React from "react";

export const Footer: React.FC = () => {
  return (
    <div className="bg-secondary w-full flex flex-col justify-center items-center py-20">
      <hr className="w-[90%] bg-[#F23F39] h-[0.1rem] mb-10" />
      <footer className="text-center text-[#F23F39]">
        <p className="mb-2">Epic Burger</p>
        <p className="mb-2">1234 Burger St, Ciudad de Corrientes, Argentina</p>
        <p className="mb-2">
          © {new Date().getFullYear()} Epic Burger. All rights reserved.
        </p>
      </footer>
    </div>
  );
};
