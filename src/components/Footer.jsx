import React from "react";
import ready from "/homepage/ready-bg-mobile.jpg";
import dineLogo from "/logo.svg";

function Footer() {
  return (
    <div className="w-full  ">
      <img src={ready} alt="ready" className="object-cover w-full md:hidden" />

      <div
        className="flex flex-col items-center bg-[#111111] text-[#FFFFFF] pb-16 
      md:flex-row md:items-center md:px-0 md:space-x-32
       lg:justify-between lg:px-[12%]  "
      >
        <div className="md:flex md:justify-between  md:w-full md:items-center  lg:max-w-[1400px] md:mx-auto lg:items-center lg:justify-center  lg:space-x-[12rem]">
          <img
            src={dineLogo}
            alt="dineLogo"
            className="mt-[5rem] mx-auto mb-[3rem] md:mt-[0rem] md:mx-[10rem] lg:mt-8 lg:translate-x-[-5rem]"
          />
          <div
            className="md:mt-16 md:mb-6  md:translate-x-[-5rem]
        lg:flex lg:flex-row lg:items-center lg:space-x-16"
          >
            <div className="flex flex-col items-center text-[14px] leading-s tracking-[2px] md:items-start">
              <p>MARTHWAITE, SEDBERGH</p>
              <p>CUMBRIA</p>
              <p>+00 44 123 4567</p>
            </div>
            <div className="flex flex-col items-center text-[14px] leading-s tracking-[2px] mt-8 md:items-start lg:mt-0">
              <p>OPEN TIMES</p>
              <p>MON - FRI: 09:00 AM - 10:00 PM</p>
              <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
