import React from "react";
import { Outlet, NavLink } from "react-router-dom";

import Header from "../header/Header";

const Layout = () => {
  return (
    <div>
      <Header />

      <Outlet />

      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
