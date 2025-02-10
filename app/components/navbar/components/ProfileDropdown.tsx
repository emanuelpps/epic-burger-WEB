"use client";
import React, { useState } from "react";
import { DropDownButton } from "./DropDownButton";

const ProfileDropdown = () => {
  const [dropDownOptions] = useState([
    {
      label: "Mi Perfil",
      link: "/profile",
    },
    {
      label: "Favoritos",
      link: "/profile/favoritos",
    },
    {
      label: "Mis Pedidos",
      link: "/profile/mis-pedidos",
    },
    {
      label: "Cerrar Sesión",
      link: "/logout",
    },
  ]);
  return (
    <div className="absolute bg-[#f0eeeb] w-40 h-auto top-6 right-3 rounded-lg shadow-lg">
      <div className="flex flex-col gap-2 p-2">
        {dropDownOptions.map((option, index) => (
          <DropDownButton key={index} label={option.label} link={option.link} />
        ))}
      </div>
    </div>
  );
};

export default ProfileDropdown;
