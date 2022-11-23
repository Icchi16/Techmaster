import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="sect-1 hero">
        <div className="hero-carousel" />
      </section>
      {/* hot section */}
      <section className="sect-2 hot">
        <div className="container">
          <div className="col d-flex justify-content-center">
            <div className="breadcrumb d-block position-relative">
              <h2 className="position-absolute">Nổi bật</h2>
            </div>
          </div>
          {/* Carousel Hot */}
          <div className="hot-carousel" />
          {/* Carousel-Hot End */}
          <div className="hot-calendar">
            <a href="./calendar.html" className="d-flex col mx-auto">
              <button
                className="btn btn-primary btn-theme text-uppercase my-5"
                type="button"
              >
                Lịch chương trình <i className="bi bi-arrow-right" />
              </button>
            </a>
          </div>
        </div>
      </section>
      {/* list sect*/}
      <section className="sect-3 list">
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="breadcrumb d-block position-relative">
              <h2 className="position-absolute">Dành Cho Bạn</h2>
            </div>
          </div>
          {/* custom list */}
          <div className="list-container">
            <div className="row g-0 flex-column flex-lg-row">
              <div className="list-category col-12 col-lg-3">
                <ul className="list-group flex-row flex-wrap flex-lg-nowrap flex-lg-column justify-content-between justify-content-lg-start">
                  <li
                    role="button"
                    className="list-group-item list-link active col-12 col-lg border-all"
                  >
                    Tất cả
                  </li>
                  <li
                    role="button"
                    className="list-group-item list-link col-4 col-lg-auto "
                  >
                    Giao hưởng
                  </li>
                  <li
                    role="button"
                    className="list-group-item list-link col-4 col-lg-auto text-center text-lg-start"
                  >
                    Kịch
                  </li>
                  <li
                    role="button"
                    className="list-group-item list-link col-4 col-lg-auto text-end text-lg-start"
                  >
                    Ca nhạc
                  </li>
                  <li
                    role="button"
                    className="list-group-item list-link col-4 col-lg-auto"
                  >
                    Liveshow
                  </li>
                  <li
                    role="button"
                    className="list-group-item list-link col-4 col-lg-auto text-center text-lg-start"
                  >
                    Xiếc
                  </li>
                  <li
                    role="button"
                    className="list-group-item list-link col-4 col-lg-auto text-end text-lg-start"
                  >
                    Sự Kiện
                  </li>
                </ul>
              </div>
              <div className="col list-banner">
                <div className="row gap-5 position-relative g-0 my-custom">
                  <div className="col custom-active">
                    <div className="card custom-card position-static">
                      <div className="row g-0">
                        <div className="col custom-thumbnail">
                          <img
                            src="/custom-1.png"
                            className="img-fluid rounded"
                            alt="..."
                          />
                        </div>
                        <div className="custom-meta position-absolute custom-visible">
                          <div className="row g-0 h-100">
                            <div className="col custom-thumbnail custom-flex" />
                            <div className="card-body custom-body col row g-0 flex-column custom-flex">
                              <div className="custom-date col d-flex align-items-center justify-content-end">
                                25 Tháng Mười
                              </div>
                              <div className="custom-main col">
                                <div className="custom-title">
                                  À Ố Show - Must See Traditional Vietnamese
                                  Culture Show
                                </div>
                                <div className="custom-desc">
                                  A O Show is a unique merge of bamboo circus,
                                  acrobatics acts, contemporary dance,
                                  traditional Vietnamese music and theatrical
                                  visual art.
                                </div>
                              </div>
                              <button
                                type="button"
                                className="btn custom-btn-theme text-uppercase col"
                              >
                                Book ngay <i className="bi bi-arrow-right" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col d-none d-md-block">
                    <div className="card custom-card position-static">
                      <div className="row g-0">
                        <div className="col custom-thumbnail">
                          <img
                            src="/custom-1.png"
                            className="img-fluid rounded"
                            alt="..."
                          />
                        </div>
                        <div className="custom-meta position-absolute custom-visible">
                          <div className="row g-0 h-100">
                            <div className="col custom-thumbnail custom-flex" />
                            <div className="card-body custom-body col row g-0 flex-column custom-flex">
                              <div className="custom-date col d-flex align-items-center justify-content-end">
                                25 Tháng Mười
                              </div>
                              <div className="custom-main col">
                                <div className="custom-title">
                                  À Ố Show - Must See Traditional Vietnamese
                                  Culture Show
                                </div>
                                <div className="custom-desc">
                                  A O Show is a unique merge of bamboo circus,
                                  acrobatics acts, contemporary dance,
                                  traditional Vietnamese music and theatrical
                                  visual art.
                                </div>
                              </div>
                              <button
                                type="button"
                                className="btn custom-btn-theme text-uppercase col"
                              >
                                Book ngay <i className="bi bi-arrow-right" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about sect */}
      <section className="sect-4 about">
        <div className="container">
          <div className="col d-flex justify-content-center">
            <div className="breadcrumb d-block position-relative">
              <h2 className="position-absolute">Về chúng tôi</h2>
            </div>
          </div>
          <div className="row g-0 about-container">
            <div className="d-none d-md-block col-6 col-lg-5">
              <div
                id="aboutcarousel"
                className="carousel about-carousel position-relative slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner about-inner">
                  <div className="carousel-item active">
                    <img
                      src="/about-1.png"
                      className="d-block w-100"
                      alt=""
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/about-1.png"
                      className="d-block w-100"
                      alt=""
                    />
                  </div>
                </div>
                <div className="carousel-indicators about-indicators gap-3">
                  <button
                    type="button"
                    data-bs-target="#aboutcarousel"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-bs-target="#aboutcarousel"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  />
                </div>
              </div>
            </div>
            <div className="col col-md-6 col-lg-7">
              <h3 className="about-title text-center text-md-start">
                Một nhà hát hơn 100 tuổi giữa lòng Hà Nội
              </h3>
              <p className="about-desc text-center text-md-start">
                Được mệnh danh là “Opéra Garnier ở Paris” thu nhỏ giữa lòng Thủ
                đô, Nhà hát Lớn Hà Nội là địa điểm được đông đảo du khách ưa
                thích ghé thăm.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sect-5 partner">
        <div className="container sect-5-container">
          <div className="partner-title mx-auto text-center">
            <h3>Nhà hát lớn Hà Nội tự hào là ngôi nhà của</h3>
          </div>
          <div className="row g-0 gap-4 flex-column">
            <div className="row justify-content-center align-items-center gap-5 g-0 partner-list-1">
              <div className="col d-flex justify-content-center">
                <img src="/partner-1.png" alt="" />
              </div>
              <div className="col d-flex justify-content-center">
                <img src="/partner-1.png" alt="" />
              </div>
              <div className="col d-none d-md-flex justify-content-center">
                <img src="/partner-1.png" alt="" />
              </div>
              <div className="col d-none d-lg-flex justify-content-center">
                <img src="/partner-1.png" alt="" />
              </div>
            </div>
            <div className="row justify-content-center align-items-center gap-5 g-0 partner-list-2">
              <div className="col d-flex justify-content-center">
                <img src="/partner-1.png" alt="" />
              </div>
              <div className="col d-flex justify-content-center">
                <img src="/partner-1.png" alt="" />
              </div>
              <div className="col d-none d-md-flex justify-content-center">
                <img src="/partner-1.png" alt="" />
              </div>
              <div className="col d-none d-lg-flex justify-content-center">
                <img src="/partner-1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sect-6 news">
        <div className="container" />
      </section>
      <section className="sect-7 subscribe h-100">
        <div className="container">
          <div className="row g-0 flex-nowrap my-5">
            <div className="d-none d-md-block col-md-5 my-subscribe">
              <img src="/subscribe.png" alt="" />
            </div>
            <div className="col col-md-7 d-flex flex-column justify-content-between subscribe-meta">
              <h4 className="subscribe-heading col text-center text-md-start">
                Đăng ký nhận tin từ Nhà Hát Lớn Hà Nội
              </h4>
              <ul className="subscribe-list list-group col my-3 my-md-0">
                <li className="list-group-numbered">
                  Độc quyền nhận các tin tức về các sự kiện sắp tới
                </li>
                <li>Ưu đãi đặc biệt cho một loạt các sự kiện và trải nghiệm</li>
                <li>
                  Tin tức và câu chuyện mới nhất từ ​​hậu trường và hơn thế nữa
                </li>
              </ul>
              <div className="subscribe-btn d-flex align-content-start justify-content-center justify-content-md-start">
                <button type="button" className="btn btn-outline-dark align-">
                  Đăng ký ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Home.loader = async () => {};

export default Home;
