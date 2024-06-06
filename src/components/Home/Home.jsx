import React from "react";
import HeroPage from "./HeroPage";
import Services from "./Services";
import OurHighlLights from "./OurHighlLights";
import Family from "./Family";
function Home() {
  return (
    <main className="">
      <HeroPage />
      <Services />
      <OurHighlLights />
      <Family />
    </main>
  );
}

export default Home;
