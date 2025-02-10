import React from "react";
import { Slide } from "./burgers/components/Slide";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main className="w-full flex justify-center items-center h-full flex-col bg-[#FFFBF2]">
        <Slide />
        {children}
      </main>
    </>
  );
};

export default Layout;
