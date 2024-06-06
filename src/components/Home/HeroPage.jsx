import React from "react";
import dineLogo from "../../../public/logo.svg";
import { Link } from "react-router-dom";
function HeroPage() {
  return (
    <main>
      {" "}
      <div className="lg:w-[670px] lg:absolute lg:h-screen lg:bg-black z-0  "></div>
      <div
        className="bg-hero-mobile bg-coldGray bg-no-repeat bg-container bg-top text-wrap px-6 
      md:bg-hero-tablet  md:w-screen
      lg:bg-hero-desktop lg:bg-cover lg:bg-center lg:px-0 lg:z-10 lg:h-screen"
      >
        {" "}
        <div
          className="text-white flex flex-col items-center pt-[15rem] space-y-8 pb-[10rem] 
        lg:z-30 lg:items-start lg:mx-auto lg:max-w-[800px]  lg:translate-x-[-9.5rem] lg:z-40 lg:pt-[10rem] 
      "
        >
          <img
            src={dineLogo}
            alt="Dinner"
            className="mt-2 md:mt-32 lg:mt-0 "
          />
          <h1
            className="font-light text-[32px] leading-[40px] tracking-l px-16 text-center
           lg:text-xl lg:leading-xl
         lg:text-start lg:tracking-xl lg:px-0"
          >
            Exquisite dining <span className="block">since 1989</span>
          </h1>
          <p
            className="text-center max-w-[500px]  text-body-2 leading-body-2  
        lg:text-start lg:text-body-1 lg:leading-body-1"
          >
            {" "}
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </p>
          <div className="pt-8 ">
            <Link to="/bookingpage">
              {" "}
              <button className="darkDefaultButton hover:darkHoverButton">
                BOOK A TABLE
              </button>
            </Link>
          </div>
        </div>
      </div>{" "}
    </main>
  );
}

export default HeroPage;
