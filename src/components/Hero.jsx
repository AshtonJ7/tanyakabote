import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import CtaButton from "./CtaButton";
import img from "../img/image.svg";

// aos
import AOS from "aos";
import "aos/dist/aos.css";


const Hero = () => {
  const myElement = useRef(null);

  useEffect(() => {
    gsap.to(myElement.current, {
      duration: 2,
      y: -100,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);

  useEffect(() => {
    AOS.init();
  });



  return (
    <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-10 secondary-font relative">
      <div
        data-aos="fade-right"
        data-aos-duration="1200"
        className="lg:w-1/2 w-full md:w-3/4 px-10 md:p-0"
      >
        <h1 className="text-[#7A6960] md:text-5xl text-3xl font-semibold">
         Helping Small Brands Make a Big Impact Online
        </h1>
        <p className="text-xl mt-5 text-gray-600 primary-font">
         Tailored digital marketing strategies designed to help small businesses grow online, attract the right audience, and convert clicks into loyal customers.
        </p>
        <div className="flex flex-col sm:flex-row items-center mb-12 lg:mb-0 lg:flex-row gap-10 mt-10">
          <a href="#about" className="">
            <CtaButton name={"About Me"} />
          </a>
    
        </div>
      </div>

      <div className="lg:w-1/2 w-full md:w-3/4 py-16 px-10 md:px-0">
        <img ref={myElement} className="image" src={img} alt="img" />
      </div>

    </div>
  );
};

export default Hero;
