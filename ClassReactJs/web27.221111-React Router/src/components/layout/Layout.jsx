import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <div>Logo</div>

        <nav>
          <NavLink to="/">Homepage</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
