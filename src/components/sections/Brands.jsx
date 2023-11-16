import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//  $$ Style $$ \\
import "../../assets/styles/parts/sliders.scss";
import "../../assets/styles/sections/brands.scss";

//  $$ Images $$ \\
import nike from "../../assets/images/nike.svg";
import adidas from "../../assets/images/adidas.svg";
import reebok from "../../assets/images/reebok.svg";
import puma from "../../assets/images/puma.svg";
import lacoste from "../../assets/images/lacoste.svg";

//  $$ Icons $$ \\
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

//  $$ Swipper $$ \\
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Brands = () => {
  return (
    <div>
      <div className="brands">
        <div className="containers">
          <div className="brands_items">
            <div className="brands_items_title mt-5 mb-[70px] flex justify-between">
              <div className="title">
                <h3>Популярные бренды</h3>
              </div>

              <div className="brands_seeMore">
                <Link className="seeMore">Все бренды</Link>
              </div>
            </div>

            <div className="slider mb-[68px]">
              <Swiper
                className="swiper"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={5}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>
                  <img src={nike} alt="nike" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={adidas} alt="nike" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={reebok} alt="nike" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={puma} alt="nike" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={lacoste} alt="nike" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={puma} alt="nike" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={lacoste} alt="nike" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="hrLine mt-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
