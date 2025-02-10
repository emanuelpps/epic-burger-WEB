import React from "react";
import { NavBar } from "../components/navbar/NavBar";
import { Footer } from "../components/footer/Footer";
import { Slide } from "./burgers/components/Slide";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main className="w-full flex justify-center items-center h-full flex-col bg-[#FFFBF2]">
        <NavBar />
        <Slide />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
