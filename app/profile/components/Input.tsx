"use client";
import React, { useState } from "react";
import { InputProps } from "../types/types";
import { HiOutlinePencilSquare } from "react-icons/hi2";

const Input: React.FC<InputProps> = ({ data }) => {
  const [isEnable, setIsEnable] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="flex gap-10">
      <input
        type="text"
        className="bg-gray-200 rounded-lg"
        value={data}
        onChange={handleChange}
        disabled={!isEnable}
      />
      <button
        className="font-primary bg-slate-300 p-2 rounded-lg border-[0.1px] border-black flex justify-center items-center"
        onClick={() => setIsEnable(!isEnable)}
      >
        <HiOutlinePencilSquare />
      </button>
    </div>
  );
};

export default Input;
