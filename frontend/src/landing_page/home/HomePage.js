import React from 'react'
import Hero from './Hero';
import Awards from './Awards';
import Education from './Education';
import Stats from './Stats';
import OpenAccount from '../../OpenAccount';
import Pricing from './Pricing';
import Navber from '../../Navber';
import Footer from '../../Footer';

function HomePage() {
    return ( 
        <>
        <Navber />
        <Hero />
        <Awards />
        <Education />
        <Stats />
        <OpenAccount />
        <Pricing />
        <Footer />
        </>
     );
}

export default HomePage;