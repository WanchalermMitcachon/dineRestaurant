import React, { useEffect, useState } from "react";
import salmon from "/homepage/salmon-mobile.jpg";
import salmonDesktop from "/homepage/salmon-desktop-tablet.jpg";
import beef from "/homepage/beef-mobile.jpg";
import beefDesktop from "/homepage/beef-desktop-tablet.jpg";
import chocolate from "/homepage/chocolate-mobile.jpg";
import chocolateDesktop from "/homepage/chocolate-desktop-tablet.jpg";
import pattern from "/patterns/pattern-divide.svg";

function OurHighlLights() {
  const [data, setData] = useState([]);

  const updateImageSrc = () => {
    if (window.innerWidth >= 1281) {
      setData([
        {
          image: salmonDesktop,
          title: "Seared Salmon Fillet",
          detail:
            "Our locally sourced salmon served with a refreshing buckwheat summer salad.",
        },
        {
          image: beefDesktop,
          title: "Rosemary Filet Mignon",
          detail:
            "Our prime beef served to your taste with a delicious choice of seasonal sides.",
        },
        {
          image: chocolateDesktop,
          title: "Summer Fruit Chocolate Mousse",
          detail:
            "Creamy mousse combined with summer fruits and dark chocolate shavings.",
        },
      ]);
      console.log("tablet");
      console.log("tablet data", data);
    } else if (window.innerWidth < 768) {
      setData([
        {
          image: salmon,
          title: "Seared Salmon Fillet",
          detail:
            "Our locally sourced salmon served with a refreshing buckwheat summer salad.",
        },
        {
          image: beef,
          title: "Rosemary Filet Mignon",
          detail:
            "Our prime beef served to your taste with a delicious choice of seasonal sides.",
        },
        {
          image: chocolate,
          title: "Summer Fruit Chocolate Mousse",
          detail:
            "Creamy mousse combined with summer fruits and dark chocolate shavings.",
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
    <div
      className="bg-[#111111] text-white pt-12 px-6 md:mt-[-4rem] lg:mt-[-12.5rem] lg:flex 
     "
    >
      <div className="md:flex md:flex-col md:max-w-[750px]  lg:max-w-[1300px] md:mx-auto">
        <div className="lg:mx-32 lg:max-w-[720px]">
          <div className="flex justify-center my-12 lg:justify-start">
            <img src={pattern} alt={pattern} />
          </div>
          <h1
            className="text-center text-[32px] font-bold leading-[40px] tracking-[-0.4px]
      md:text-l md:leading-l md:tracking-l md:px-32 lg:text-start lg:px-0"
          >
            {" "}
            A few highlights from our menu
          </h1>
          <p
            className="text-center text-body-2 leading-body-2 my-8 md:text-body-1
       md:leading-body-1 md:px-32 lg:text-start lg:px-0"
          >
            {" "}
            We cater for all dietary requirements, but here’s a glimpse at some
            of our diner’s favourites. Our menu is revamped every season.
          </p>
        </div>
        <div className="mt-16 pb-16 md:space-y-16 lg:space-y-6">
          {data.map((item, idx) => {
            return (
              <>
                <div
                  className="flex flex-col items-center md:flex-row md:items-center  "
                  key={idx}
                >
                  <img
                    src={item.image}
                    alt={item.image}
                    className="w-full object-cover md:w-[30%]  md:mr-16"
                  />
                  <div className="md:space-y-8 md:pr-14 lg:space-y-3">
                    <h1
                      className="font-bold text-center text-body-1 leading-m tracking-m mt-12 
                md:text-start lg:mt-0"
                    >
                      {item.title}
                    </h1>
                    <p
                      className="my-12  text-center text-body-2 leading-body-2 mt-4
                 md:text-start"
                    >
                      {item.detail}
                    </p>
                  </div>
                  {idx !== data.length - 1 && (
                    <hr className="my-8 w-full md:hidden " />
                  )}{" "}
                </div>{" "}
                {idx !== data.length - 1 && (
                  <hr className="lg:border-[0.1px] lg:w-full lg:border-[#979797]"></hr>
                )}{" "}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurHighlLights;
