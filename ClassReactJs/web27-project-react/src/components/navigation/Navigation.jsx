import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

import Nav from "react-bootstrap/Nav";

const menu = [
  { path: "/", label: "Trang chủ" },
  { path: "/calendar", label: "Lịch Trình" },
  { path: "/discover", label: "Khám Phá" },
  { path: "/news", label: "Tin tức" },
  { path: "/about", label: "Giới thiệu" },
];

const Navigation = () => {
  return (
    <Nav className="me-auto">
      {menu.map((item) => (
        <Nav.Link as={Link} to={item.path}>
          {item.label}
        </Nav.Link>
      ))}
    </Nav>
  );
};

export default Navigation;
