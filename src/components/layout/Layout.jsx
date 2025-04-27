import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-blue-100">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
