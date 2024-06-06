import React, { useEffect, useState } from "react";
import familyMobile from "/homepage/family-gathering-mobile.jpg";
import familyTablet from "/homepage/family-gathering-tablet.jpg";
import familyDesktop from "/homepage/family-gathering-desktop.jpg";
import specialMobile from "/homepage/special-events-mobile.jpg";
import specialTablet from "/homepage/special-events-tablet.jpg";
import specialDesktop from "/homepage/special-events-desktop.jpg";
import socialMobile from "/homepage/social-events-mobile.jpg";
import socialTablet from "/homepage/social-events-tablet.jpg";
import socialDesktop from "/homepage/social-events-desktop.jpg";
import lines from "/patterns/pattern-lines.svg";
import curveTopRight from "/patterns/pattern-curve-top-right.svg";
import { Link } from "react-router-dom";

function Family() {
  const [isActive, setIsActive] = useState(1);
  const [data, setData] = useState([]);

  const updateImageSrc = () => {
    if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      setData([
        { img: familyTablet, title: "Family Gathering" },
        { img: specialTablet, title: "Special Events" },
        { img: socialTablet, title: "Social Events" },
      ]);
      console.log("tablet");
      console.log("tablet data", data);
    } else if (window.innerWidth < 768) {
      setData([
        { img: familyMobile, title: "Family Gathering" },
        { img: specialMobile, title: "Special Events" },
        { img: socialMobile, title: "Social Events" },
      ]);
      console.log("mobile");
      console.log("mobile data", data);
    } else if (window.innerWidth >= 1281) {
      setData([
        { img: familyDesktop, title: "Family Gathering" },
        { img: specialDesktop, title: "Special Events" },
        { img: socialDesktop, title: "Social Events" },
      ]);
    }
  };

  useEffect(() => {
    updateImageSrc();
    window.addEventListener("resize", updateImageSrc);
    return () => window.removeEventListener("resize", updateImageSrc);
  }, []);

  return (
    <>
      <div className="mt-28 px-6 md:px-0 md:relative lg:flex lg:my-[10%] lg:px-[0rem] ">
        <div className="lg:max-w-[1300px] lg:mx-auto lg:flex ">
          <img
            src={curveTopRight}
            className="hidden md:block md:absolute md:top-[-13%] md:left-0 md:w-[50%] md:h-[37.5%] "
          />
          <div className="lg:max-w-[1100px] lg:mx-auto lg:flex  lg:items-center lg:justify-center">
            {data.map((item, idx) => {
              return (
                <div className="lg:relative">
                  {isActive === idx + 1 && (
                    <div key={idx} className="px-[10%]">
                      <img
                        src={item.img}
                        alt="family"
                        className="w-full object-cover shadow-dropdown md:w-[80%]  md:mx-auto 
                 lg:h-full lg:w-[80vw] "
                      />{" "}
                      <img
                        className="hidden md:block md:absolute md:top-[-4.5%] md:left-20 lg:top-0 lg:left-0"
                        src={lines}
                        alt="xxx"
                      ></img>
                    </div>
                  )}
                </div>
              );
            })}

            <div className="space-y-8 pb-20  flex flex-col items-center lg:flex-col-reverse lg:items-start">
              {" "}
              <div
                className="flex flex-col items-center justify-center  mt-14 space-y-4 md:flex-row md:items-center 
            md:space-y-0 md:mb-6 md:space-x-16 
        lg:flex-col lg:items-start lg:space-y-4 lg:space-x-[0rem] 
        "
              >
                <h1
                  className={`font-semibold uppercase text-[17px] leading-s tracking-s ${
                    isActive === 1 ? "text-shittleGray " : " text-gray-400"
                  } `}
                  onClick={() => setIsActive(1)}
                >
                  {"  "}
                  <span className="relative inline-block  ">
                    <span className="cursor-pointer">Family Gathering</span>
                    <span
                      className={`${
                        isActive === 1 &&
                        "absolute bottom-0 left-[4.5rem] w-[50px] h-[1px] bg-beaver translate-y-1  lg:left-[-8.1rem] lg:w-[60%] lg:top-2"
                      } `}
                    ></span>{" "}
                  </span>
                </h1>
                <h1
                  className={`font-semibold uppercase text-[17px] leading-s tracking-s ${
                    isActive === 2 ? "text-shittleGray" : " text-gray-400"
                  }`}
                  onClick={() => setIsActive(2)}
                >
                  {"  "}
                  <span className="relative inline-block">
                    <span className="cursor-pointer lg:text-start">
                      {" "}
                      Special Events
                    </span>
                    <span
                      className={`${
                        isActive === 2 &&
                        "absolute bottom-0 left-[4.5rem] w-[50px] h-[1px] bg-beaver translate-y-1  lg:left-[-8.1rem] lg:w-[60%] lg:top-2"
                      } `}
                    ></span>
                  </span>
                </h1>
                <h1
                  className={`font-semibold uppercase text-[17px] leading-s tracking-s ${
                    isActive === 3 ? "text-shittleGray" : " text-gray-400"
                  }`}
                  onClick={() => setIsActive(3)}
                >
                  {"  "}
                  <span className="relative inline-block">
                    <span className="cursor-pointer">Social Events</span>
                    <span
                      className={`${
                        isActive === 3 &&
                        "absolute bottom-0 left-[4.5rem] w-[50px] h-[1px] bg-beaver translate-y-1 lg:left-[-8.1rem] lg:w-[60%] lg:top-2"
                      } `}
                    ></span>{" "}
                  </span>
                </h1>
              </div>{" "}
              <div className="flex flex-col items-center space-y-4 lg:items-start lg:ml-[0%]">
                <h1
                  className="font-bold text-[32px] text-center leading-[40px] tracking-[-0.4px] md:text-l md:leading-l md:tracking-l 
            lg:text-start
            "
                >
                  {" "}
                  Family Gathering
                </h1>
                <p
                  className="text-center text-body-2 leading-body-2 indent-[2rem] md:text-body-1 md:leading-body-1 md:px-36
              lg:text-start lg:px-0 lg:indent-0
            "
                >
                  We love catering for entire families. So please bring everyone
                  along for a special meal with your loved ones. We’ll provide a
                  memorable experience for all.
                </p>
                <Link to="/bookingpage">
                  <button className="lightDefaultButton hover:darkHoverButton md:mt-6">
                    BOOK A TABLE
                  </button>
                </Link>
              </div>{" "}
            </div>
          </div>
        </div>{" "}
      </div>

      <div
        className="hidden md:flex w-screen flex-col bg-footer-tablet bg-cover bg-top 
   text-white items-center justify-center space-y-6 py-16 
   lg:w-full lg:flex-row lg:space-x-32
   "
      >
        <h1 className="text-l font-bold leading-l tracking-l">
          Ready to make a reservation?
        </h1>
        <button className="darkDefaultButton hover:darkHoverButton">
          BOOK A TABLE
        </button>
      </div>
    </>
  );
}

export default Family;
