import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Navigation from "../navigation/Navigation";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { Link, Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="row g-0">
          <div className="social-footer col-lg-1 d-flex flex-column align-items-center align-items-lg-start">
            <div className="row g-0 col-6 col-md-4 col-lg-12">
              <div className="col">
                <div className="social-link">
                  <a href="">
                    <i className="bi bi-facebook" />
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="social-link">
                  <a href="">
                    <i className="bi bi-twitter" />
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="social-link">
                  <a href="">
                    <i className="bi bi-youtube" />
                  </a>
                </div>
              </div>
            </div>
            <div className="row g-0 col-6 col-md-4 col-lg-12">
              <div className="col">
                <div className="social-link">
                  <a href="">
                    <i className="bi bi-instagram" />
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="social-link">
                  <a href="">
                    <i className="bi bi-tiktok" />
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="social-link">
                  <a href="">
                    <i className="bi bi-pinterest" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-10 footer-link">
            <div className="row g-0 gap-1 gap-md-3 justify-content-center footer-link">
              <div className="footer-row row justify-content-center flex-wrap flex-md-nowrap gap-1 gap-md-3 gap-lg-5">
                <a href="" className="">
                  Giới Thiệu
                </a>
                <a href="" className="">
                  Liên Hệ
                </a>
                <a href="" className="">
                  Việc Làm
                </a>
                <a href="" className="">
                  Khám Phá
                </a>
              </div>
              <div className="footer-row row justify-content-center flex-wrap flex-md-nowrap gap-1 gap-md-3 gap-lg-5">
                <a href="" className="">
                  Phần Thưởng
                </a>
                <a href="" className="">
                  Membership
                </a>
                <a href="" className="">
                  Tổ chức &amp; Hợp Tác
                </a>
                <a href="" className="">
                  Kiến Trúc
                </a>
                <a href="" className="">
                  Tin Tức
                </a>
              </div>
              <div className="footer-row row justify-content-center flex-wrap flex-md-nowrap dap-1 gap-md-3 gap-lg-5">
                <a href="" className="">
                  Voucher
                </a>
                <a href="" className="">
                  Tour Tham Quan
                </a>
                <a href="" className="">
                  Thuê Địa Điểm
                </a>
                <a href="" className="">
                  Phản Hồi
                </a>
                <a href="" className="">
                  Media
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-1 row term-link g-0 my-3 my-lg-0 align-content-lg-start justify-content-center justify-content-lg-start">
            <a href="">Điều khoản sử dụng </a>
            <a href="">Quyền riêng tư</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
