import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTopButton from "./ScrollToTopButton";

const Layout = () => {
  return (
    <div>
      <Outlet />
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;
