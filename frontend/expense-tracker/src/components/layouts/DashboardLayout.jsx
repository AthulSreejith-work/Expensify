import React, { useState, useContext } from "react";
import SideMenu from "./SideMenu";
import Navbar from "./Navbar";
import { UserContext } from "../../context/UserContext";

const DashboardLayout = ({ children, activeMenu }) => {
  const { user } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-sky-50">
      <Navbar
        activeMenu={activeMenu}
        toggleSideMenu={() => setIsMenuOpen((prev) => !prev)}
        isMenuOpen={isMenuOpen}
      />

      <div className="flex">
        <div
          className={`transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          } fixed z-30 top-[61px] left-0 lg:static lg:block`}
        >
          <SideMenu activeMenu={activeMenu} />
        </div>

        <div className="grow p-6 bg-white shadow-inner rounded-tl-3xl min-h-[calc(100vh-61px)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
