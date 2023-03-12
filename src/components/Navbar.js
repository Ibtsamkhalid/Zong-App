import React from "react";
// import { Menu } from "antd";
import { SearchOutlined, UserOutlined,MenuOutlined } from "@ant-design/icons";
import "./Navbar.css";

const Navbar = () => (
  <>
  <div className="Navbar">
      <div className="imageContainer">
        <div>
          <img className="img0" alt="1" src="https://www.zong.com.pk/assets/images/zong_logo.svg" width={111} height={65}/>
        </div>

        <div>
          <img className="img2" alt="2" src="https://www.zong.com.pk/assets/images/cm_logo.svg" width={81} height={65}/>
        </div>
      </div>
      <div className="thetopmenu">
          <ul>
            <li><a href="#">Prepaid</a>  
            <div className="bb"></div>
            <ul className="dropdown">
                <li><a href="#">All Offer</a></li>
                <li><a href="#">Sim Lagao Offer</a></li>
                <li><a href="#">New Sim Offer</a></li>
                <li><a href="#">Daily Voice Offer</a></li>
                <li><a href="#">BYN</a></li>
              </ul>
            </li>

            <li>
              <a href="#">Postpaid</a>
              <div className="bb"></div>
              <ul className="dropdown">
                <li><a href="#">All Tarrifs</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Business</a>
              <div className="bb"></div>
              <ul className="dropdown">
                <li><a href="#">English</a></li>
                <li><a href="#">Chinese</a></li>
              </ul>
            </li>

            <li>
              <a href="#">Devices</a>
              <div className="bb"></div>
              <ul className="dropdown">
                <li><a href="#">Mobile broadband</a></li>
                <li><a href="#">4G Devices</a></li>
              </ul>
            </li>

            <li>
              <a href="#">International</a>
              <div className="bb"></div>
              <ul className="dropdown">
                <li><a href="#">Swedan</a></li>
                <li><a href="#">Canada</a></li>
                <li><a href="#">Australia</a></li>
                <li><a href="#">UK</a></li>
                <li><a href="#">Brazil</a></li>
              </ul>
            </li>

            <li>
              <a href="#">Vas</a>
              <div className="bb"></div>
              <ul className="dropdown">
                <li><a href="#">Sport</a></li>
                <li><a href="#">Utility</a></li>
                <li><a href="#">Religion</a></li>
                <li><a href="#">Waada</a></li>
                <li><a href="#">Price Oye</a></li>
              </ul>
            </li>

            <li>
              <a href="#">Bookings</a>
              <div className="bb"></div>
            </li>

            <li>
              <a href="#">Paymax</a>
              <div className="bb"></div>
              <ul className="dropdown">
                <li><a href="#">Outlet</a></li>
                <li><a href="#">Agent Locator</a></li>
              </ul>
            </li> 

            <li>
              <a href="#">Complaints</a>
              <div className="bb"></div>
            </li>

            <li>
              <a href="#">Payment</a>
              <div className="bb"></div>
            </li>
            
            <li>
              <a href="#">اردو</a>
              <div className="bb"></div>
            </li>
          </ul>
      </div>
      <div className="iconsimage">
        <a href="#">
          <SearchOutlined className="icon1" />
        </a>
        <a href="#">
          <UserOutlined className="icon2" />
        </a>
        <a href="#"><MenuOutlined className="hidden"/></a>
      </div>
    </div></>
);

export default Navbar;
