import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Navigation from "../navigation/Navigation";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    // <div>
    //   <Navbar bg="light" expand="lg">
    //     <Container>
    //       <Navbar.Toggle aria-controls="nav-bar" />
    //       <Navbar.Collapse id="nav-bar">
    //         <Navigation />
    //         {/* <Outlet /> */}
    //       </Navbar.Collapse>
    //       <Navbar.Brand>
    //         <Link to="/">
    //           <img src="/vite.svg" alt="" />
    //         </Link>
    //       </Navbar.Brand>
    //       <Navigation />
    //     </Container>
    //   </Navbar>
    // </div>

    <nav className="nav navbar navbar-expand-lg fixed-top bg-main">
      <div className="container-lg container-fluid d-flex">
        <button
          className="navbar-toggler ham-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list " />
        </button>
        {/* logo */}
        <a href="#" className="navbar-brand">
          <img src="/logo.svg" alt="" />
        </a>
        {/* mobile search */}
        <button
          className="navbar-toggler d-lg-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mobilesearch"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-search" />
        </button>
        <div
          className="mobile-search collapse navbar-collapse justify-content-center "
          id="mobilesearch"
        >
          <ul className="navbar-nav navbar-nav-scroll gap-4">
            <form
              className="d-flex nav-search justify-content-end"
              role="search"
            >
              <input
                className="search-type"
                type="search"
                placeholder="Tìm kiếm ..."
                aria-label="Search"
              />
              <button className="search-btn" type="submit">
                <i className="bi bi-search" />
              </button>
            </form>
          </ul>
        </div>
        {/* nav */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbar"
        >
          <ul className="navbar-nav navbar-nav-scroll gap-4">
            <li className="nav-item">
              <a className="nav-link" href="../index.html">
                Trang chủ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../calendar.html">
                Lịch trình
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Khám phá
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tin Tức
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../about.html">
                Giới thiệu
              </a>
            </li>
          </ul>
        </div>
        <form className="d-flex nav-search d-none d-lg-block" role="search">
          <input
            className="search-type"
            type="search"
            placeholder="Tìm kiếm ..."
            aria-label="Search"
          />
          <button className="search-btn" type="submit">
            <i className="bi bi-search" />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
