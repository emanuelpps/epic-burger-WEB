import React, { ReactNode } from "react";
import ProfileHeader from "./components/ProfileHeader";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <ProfileHeader />
      <div className="flex h-[90%] justify-center items-center">{children}</div>
    </>
  );
};

export default Layout;
