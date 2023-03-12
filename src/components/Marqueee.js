import React from "react";
import Marquee from "react-fast-marquee";
import "./Marqueee.css";
const Marqueee=()=>{
    return(
        <div className="allmarquee">
        <Marquee pauseOnHover speed={150} gradient={false} className="marqueeText">
        <ul>
        <li>Muaziz Sarif, 27 April 2022 se Weekly Tik Tok mein payen 7 din k liey 3 GB TikTok Sirf Rs. 70 load mein.Dial *606# </li>
        <li>3rd March se Apna Shehr Khairpur se mile 3 GB data, 40 minute doosray networks par, 300 zong minutes aur 300 sms, 7 din ke lye siraf Rs. 80 load main. Abhe milaye *4466#</li>
        <li>  3rd March se Multan Dhamaal Offer se mile 5 GB data, 30 minute doosray networks par, 1000 zong minutes aur 1000 sms, 7 din ke lye siraf Rs. 90 load main. Abhe milaye *4466# </li>
        <li>  In order to keep our valued customers updated, Zong brings latest information about COVID-19. Please click here </li>
        <li> From June,2022,your postpaid tariff z2700, monthly line rent will be PKR 2700 and you will get 50GB free data,1200 free offnet+unlimited onnet +5000 free SMS.</li>
        </ul>
        </Marquee>
        </div>
        )
}
export default Marqueee;