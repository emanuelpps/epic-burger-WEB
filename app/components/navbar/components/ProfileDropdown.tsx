import React from "react";
import Link from "next/link";

const ProfileDropdown = () => {
  return (
    <div className="absolute bg-[#f0eeeb] w-40 h-40 top-6 right-3">
      <div>
        <Link href="/profile" className="block p-2">
          Mi Perfil
        </Link>
        <Link href="/favoritos" className="block p-2">
          Favoritos
        </Link>
        <Link href="/mis-pedidos" className="block p-2">
          Mis Pedidos
        </Link>
        <Link href="/logout" className="block p-2">
          Cerrar Sesión
        </Link>
      </div>
    </div>
  );
};

export default ProfileDropdown;
