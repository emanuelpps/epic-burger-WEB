"use client";
import React, { useState } from "react";
import avatarImage from "@/public/assets/images/avatar.png";
import Image from "next/image";
import { UserData } from "./types/types";
import Input from "./components/input";

const Page: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    name: "pepito gonzalez",
    email: "emaiul@email.com",
    phone: "123456789",
    address: "calle falsa 123",
  });
  return (
    <div
      id="profile-page"
      className="flex w-full justify-center items-center flex-col bg-[#FFFBF2]"
    >
      <div
        id="profile"
        className="flex w-[90%] gap-10 mt-20 items-center justify-center"
      >
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src={avatarImage}
              width={150}
              height={150}
              alt="avatar image"
              className="bg-slate-300 rounded-full border-2 border-primary p-0"
            />
            <div className="flex justify-center items-center">
              <button className="bg-slate-300 p-2 rounded-lg border-[0.1px] border-black">
                cambiar imagen
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h3>Nombre</h3>
          <Input data={userData.name} />
        </div>
      </div>
      <div
        id="profile-data"
        className="flex w-[90%] justify-evenly items-center mt-20"
      >
        <div>
          <h3>Email</h3>
          <Input data={userData.email} />
        </div>
        <div>
          <h3>Telefono</h3>
          <Input data={userData.phone} />
        </div>
        <div>
          <h3>Direccion</h3>
          <Input data={userData.address} />
        </div>
      </div>
    </div>
  );
};

export default Page;
