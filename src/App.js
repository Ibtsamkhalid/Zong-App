import React, { Fragment } from "react";

import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Roundbuttons from "./components/Roundbuttons";
import Bundlescardslider from "./components/Bundlescardslider";
import Smartphone from "./components/Smartphone";
import Devices from "./components/Devices";
import Internet from "./components/Internet";
import Marqueee from "./components/Marqueee";
import Reachus from "./components/Reachus";
import Movetotop from "./components/Movetotop";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Slider />
      <Roundbuttons />
      <Bundlescardslider />
      <Smartphone />
      <Devices />
      <Internet />
      <Marqueee />
      <Reachus />
      <Movetotop />
    </Fragment>
  );
}

export default App;
