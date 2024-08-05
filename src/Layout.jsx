import React from "react";
import { Outlet } from "react-router-dom";

import bgvideo from "./assets/bgvideo.mp4";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Layout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <video
        autoPlay
        loop
        muted
        id="video"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-40"
      >
        <source src={bgvideo} type="video/mp4" />
      </video>
      <div className="relative z-10 h-screen w-screen">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
