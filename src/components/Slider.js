import { Carousel } from "antd";
import React from "react";


const Slider = () => {
  function onChange(current) {
    console.log(current);
  }

  return (
    <div className="allslider">
      <Carousel autoplay afterChange={onChange}>
        <div>
          <img
            alt="1"
            src="https://www.zong.com.pk/assets/images/home_slider/slider_d4997733e0694307d25b46a20bcce957.webp"
            width="100%"
            // height={742}
          />
        </div>
        <div>
          <img
            alt="1"
            src="https://www.zong.com.pk/assets/images/home_slider/slider_b794c44dd37f98b08ef219d9a797974f.webp"
            width="100%"
            // height={742}
          />
        </div>
        <div>
          <img
            alt="1"
            src="https://www.zong.com.pk/assets/images/home_slider/slider_32eb7131dcbd5c35e4fb7b10a4f0a334.webp"
            width="100%"
            // height={742}
          />
        </div>
        <div>
          <img
            alt="1"
            src="https://www.zong.com.pk/assets/images/home_slider/slider_b7bfcfa9d0642022837186f33327cad1.webp"
            width="100%"
            // height={742}
          />
        </div>
      </Carousel>
    </div>
  );


};

export default Slider;
