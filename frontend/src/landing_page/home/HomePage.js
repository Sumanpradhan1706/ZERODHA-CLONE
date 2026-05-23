import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Education from "./Education";
import Stats from "./Stats";
import OpenAccount from "../../OpenAccount";
import Pricing from "./Pricing";

function HomePage() {
    return ( 
        <>
        <Hero />
        <Awards />
        <Education />
        <Stats />
        <OpenAccount />
        <Pricing />
        </>
     );
}

export default HomePage;