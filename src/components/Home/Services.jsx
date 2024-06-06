import React, { useEffect, useState } from "react";
import enjoyablePlaceMobile from "/homepage/enjoyable-place-mobile.jpg";
import enjoyablePlaceTablet from "/homepage/enjoyable-place-tablet.jpg";
import enjoyablePlaceDesktop from "/homepage/enjoyable-place-desktop.jpg";
import localFoodMobile from "/homepage/locally-sourced-mobile.jpg";
import localFoodTablet from "/homepage/locally-sourced-tablet.jpg";
import localFoodDesktop from "/homepage/locally-sourced-desktop.jpg";

import patternDivide from "/patterns/pattern-divide.svg";
import patternCurveTopRight from "/patterns/pattern-curve-top-right.svg";
import patternCurveTopleft from "/patterns/pattern-curve-top-left.svg";
import lines from "/patterns/pattern-lines.svg";

function Services() {
  const [data, setData] = useState([]);
  const updateImageSrc = () => {
    if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      setData([
        {
          image: enjoyablePlaceTablet,
          title: "Enjoyable place for all the family",
          detail:
            " Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.",
        },
        {
          image: localFoodTablet,
          title: "The most locally sourced food",
          detail:
            "All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.",
        },
      ]);
      console.log("tablet");
      console.log("tablet data", data);
    } else if (window.innerWidth < 768) {
      setData([
        {
          image: enjoyablePlaceMobile,
          title: "Enjoyable place for all the family",
          detail:
            " Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.",
        },
        {
          image: localFoodMobile,
          title: "The most locally sourced food",
          detail:
            "All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.",
        },
      ]);
      console.log("mobile");
      console.log("mobile data", data);
    } else if (window.innerWidth >= 1281) {
      setData([
        {
          image: enjoyablePlaceDesktop,
          title: "Enjoyable place for all the family",
          detail:
            " Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.",
        },
        {
          image: localFoodDesktop,
          title: "The most locally sourced food",
          detail:
            "All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.",
        },
      ]);
    }
  };

  useEffect(() => {
    updateImageSrc();
    window.addEventListener("resize", updateImageSrc);
    return () => window.removeEventListener("resize", updateImageSrc);
  }, []);

  return (
    <div className="px-6 space-y-24 translate-y-[-10rem]  lg:translate-y-[-9rem] lg:z-40 ">
      {" "}
      <img
        src={patternCurveTopRight}
        alt="patternCurveBottomRight"
        className="hidden md:block md:absolute md:left-0 md:top-[21rem] md:w-[45%] 
        md:h-[20%] lg:h-auto lg:left-0 "
      />
      <img
        src={patternCurveTopleft}
        alt="patternCurveBottomRight"
        className="hidden md:block md:absolute md:w-[42.5%]  md:bottom-[-6rem] md:h-[20%] md:right-0 lg:w-[70%] lg:bottom-10 "
      />
      {data.map((item, idx) => {
        return (
          <div
            className={`text-center space-y-16 md:flex md:flex-col
          md:items-center 
          lg:mx-auto lg:px-[3.55rem] lg:max-w-[1200px]  lg:space-y-0 
          ${idx === 0 ? "lg:flex-row  " : "lg:flex-row-reverse "} `}
            key={idx}
          >
            <div className="lg:relative">
              <img
                src={item.image}
                alt={item.image}
                className={`object-cover w-full shadow-dropdown md:w-[80%] lg:w-[540px] lg:h-[720px] ${
                  idx === 0 ? "" : ""
                } `}
              />
              {idx === 1 && (
                <img
                  src={lines}
                  alt="patternCurveBottomRight"
                  className="hidden md:block md:absolute md:bottom-[40%] md:right-1 md:z-40 lg:right-[-5rem] lg:top-6"
                />
              )}
            </div>
            <div
              className={`flex flex-col items-center md:mx-32 lg:mx-0 lg:items-start lg:mx-16 ${
                idx === 0 ? "lg:translate-x-[5rem]" : "lg:translate-x-[-3.7rem]"
              } `}
            >
              <img
                src={patternDivide}
                alt="patternDivide"
                className="mb-10 ]"
              />
              <div className="">
                <h1
                  className="font-bold text-[32px] leading-[40px] 
              tracking-[-0.4px] mx-12 md:text-l md:leading-l md:tracking-l lg:text-start lg:mx-0  lg:max-w-[400px]"
                >
                  {item.title}
                </h1>
                <p
                  className={`text-body-2 leading-body-2 my-8 md:text-body-1 
              md:leading-body-1 lg:text-start lg:max-w-[500px] `}
                >
                  {item.detail}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Services;
