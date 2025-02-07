"use client";
import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import ProfileDropdown from "./ProfileDropdown";

export default function Avatar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative flex justify-center items-center w-[10%] cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <RxAvatar className="text-[#F23F39] text-[1.5rem]" />
      {isOpen && <ProfileDropdown />}
    </div>
  );
}
