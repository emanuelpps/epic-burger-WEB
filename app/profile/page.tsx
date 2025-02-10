import React from "react";
import avatarImage from "@/public/assets/images/avatar.png";
import Image from "next/image";

const page = () => {
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
              <button className="bg-slate-300 p-1 rounded-lg">
                cambiar imagen
              </button>
            </div>
          </div>
        </div>
        <div>nombre y apellido</div>
      </div>
      <div
        id="profile-data"
        className="flex w-[90%] justify-evenly items-center mt-20"
      >
        <div>email</div>
        <div>telefono</div>
        <div>direccion</div>
      </div>
    </div>
  );
};

export default page;
