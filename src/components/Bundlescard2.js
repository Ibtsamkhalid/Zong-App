import React from "react";
import "./Bundlescard.css";
import { BiPhoneCall, BiWifi } from "react-icons/bi";
const Bundlescard2 = () => {
  console.log("hello");
  return (
    <div className="body">
      <div className="container ">
        <div className="content">
          <div className="card">
            <div className="card-content">
              <div className="top">
                <span className="offer">Weekly</span>
                <span className="type">MEGA DATA OFFER</span>
              </div>

              <div className="icons">
                  <span><BiWifi /></span>
                  <span><BiPhoneCall /></span>
                  <span className="i3"><BiPhoneCall /></span>
              </div>
              <div className="icondata">
              <div className="wifi">
                <span className="wifidata">12GB</span>
                <span className="wifitype">Internet</span>
              </div>
              <div className="call">
                <span className="calldata">180</span>
                <span className="calltype">Off-net Mins</span>
              </div>

              <div className="call1">
                <span className="calldata">Unlimited</span>
                <span className="calltype">Zong Mins</span>
              </div>
              </div>
              <div className="price">
                <span className="Rs">PKR. 399</span>
                <span className="Rs2">Consumer Price</span>
              </div>

              <div className="buttoncard">
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bundlescard2;
