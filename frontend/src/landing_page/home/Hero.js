import React from 'react'

function Hero() {
    return ( 
        <div classname ='container p-5 mb-5'>
            <div classname='row text-center'>
                <img src="media/images/homeHero.png" alt="Hero Image"  className="mb-5"/>

                <h1>
                   Invest in Everything
                </h1>
                <p>   Online platform to invest in stocks, derivatives, mutual funds, and
          more</p>

                <button className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}> Signup Now</button>
            </div>
        </div>
     );
}

export default Hero;