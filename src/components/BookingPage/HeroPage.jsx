import React from "react";
import dineLogo from "/logo.svg";
import { Link } from "react-router-dom";
function HeroPage() {
  return (
    <div
      className="bg-hero-booking-mobile bg-cover bg-no-repeat bg-top h-full pb-[6rem]
     md:bg-hero-booking-tablet 
     lg:bg-hero-booking-desktop lg:bg-cover lg:pt-[5rem] lg:pb-0 lg:px-32 "
    >
      <div
        className="text-white flex flex-col items-center pt-[4rem] space-y-8 pb-[10rem] px-6
      lg:items-start lg:max-w-[700px] lg:pt-0 lg:pb-[10rem] lg:mx-auto lg:translate-x-[-10.5rem]
      "
      >
        <Link to="/">
          {" "}
          <img
            src={dineLogo}
            alt="Dinner"
            className="mt-2 md:absolute md:left-36 md:top-12  lg:static lg:mb-16"
          />
        </Link>

        <h1
          className="font-light pt-2 text-[32px] leading-[40px] tracking-l px-16 text-center md:text-l md:leading-l 
        md:tracking-[-0.6px] md:pt-16 lg:text-xl lg:leading-xl lg:tracking-xl lg:text-start lg:px-0 lg:pt-0"
        >
          Reservations
        </h1>
        <p
          className="text-center max-w-[500px]  text-body-2 md:text-body-1 md:leading-body-1 md:max-w-[600px]
        lg:text-start lg:max-w-[500px]
        "
        >
          {" "}
          We can’t wait to host you. If you have any special requirements please
          feel free to call on the phone number below. We’ll be happy to
          accommodate you.
        </p>
        <div className="pt-1 md:hidden">
          <Link to="/">
            {" "}
            <button className="darkDefaultButton hover:darkHoverButton">
              RESERVE PLACE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
