import React from "react";
import { NavBar } from "../components/navbar/NavBar";
import { Footer } from "../components/footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-secondary flex flex-col w-screen h-screen">
      <header className="flex justify-center items-center p-4 bg-secondary">
        <NavBar />
      </header>
      {children}
      <Footer />
    </div>
  );
}
