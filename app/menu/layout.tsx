import React from "react";
import { NavBar } from "../components/navbar/NavBar";
import { Footer } from "../components/footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main>
        <NavBar />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
