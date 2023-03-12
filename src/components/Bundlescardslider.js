import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";

import "./Bundlescardslider.css";

// import required modules
import { FreeMode, Navigation, Pagination } from "swiper";
import Bundlescard from "./Bundlescard";
import Bundlescard1 from "./Bundlescard1";
import Bundlescard2 from "./Bundlescard2";
import Bundlescard3 from "./Bundlescard3";
import Bundlescard4 from "./Bundlescard4";

const Bundlescardslider =()=> {
  return (

    <div className="allcardslider">
    <div className="leftcontent">
        <h1>Hot Bundles</h1>
        <p>Check out Zong 4G hot bundles and enjoy the most exhilarating mobile internet packages, SMS, Voice, & hybrid bundles</p>
        <button>Read More</button>
    </div>
      <Swiper
      slidesPerView={3}
      spaceBetween={0}
      freeMode={true}
      loop={true}
      navigation={true}
      modules={[FreeMode, Pagination, Navigation]}
      className="mySwiper"
      >
        <SwiperSlide className="sliderspace">{Bundlescard}</SwiperSlide>
        <SwiperSlide className="sliderspace">{Bundlescard1}</SwiperSlide>
        <SwiperSlide className="sliderspace">{Bundlescard2}</SwiperSlide>
        <SwiperSlide className="sliderspace">{Bundlescard3}</SwiperSlide>
        <SwiperSlide className="sliderspace">{Bundlescard4}</SwiperSlide>
       
      
      </Swiper>
      </div>     
  );
}
export default Bundlescardslider;
