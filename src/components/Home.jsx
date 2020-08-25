import React, { Component } from "react";
import Product from "./Product";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      {/* Banner */}
      <img
        className="home-image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/Evergreen/CTATestAug2020/GWBleedingHero_P_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB407744532_.jpg"
        alt=""
      />

      {/* Products */}
      {/* Product: id,title,price,rating,image */}
      <div className="home-row">
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
          price={10.38}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="48719281"
          title="Guitar Hero X-Plorer Wired Guitar Controller (Xbox 360)"
          price={149.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/31yzVFDQosL._AC_.jpg"
        />
      </div>
      <div className="home-row">
        <Product
          id="21351623"
          title="beyerdynamic DT 990 PRO Studio Headphones"
          price={105.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61YTf1L4feL._AC_SL1230_.jpg"
        />
        <Product
          id="65521257"
          title="OneCut Pet Nail Clippers, Update Version Cat & Kitten Claw Nail Clippers for Trimming, Professional Pet Nail Clippers Best for a Cat, Puppy, Kitten & Small Dog (Yellow)"
          price={3.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41UaSjidokL._AC_SX450_.jpg"
        />
        <Product
          id="42216854"
          title="Razer Huntsman - Opto-Mechanical Switch, Hybrid On-Board Memory and Cloud Storage, Durability of Up to 100 Million Keystrokes, Light and Clicky Gaming Keyboard, UK-Layout"
          price={111.31}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/6145iueBGAL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home-row">
        <Product
          id="47427442"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440, 120Hz, Freesync, Gsync Compatible, HDMI, 2 x Displayport, USB"
          price={1084.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
