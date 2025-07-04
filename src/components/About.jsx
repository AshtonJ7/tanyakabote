import React, { useEffect, useState } from "react";
import CtaButton from "./CtaButton";
import img from "../img/about-img.svg";
import { BsPeople } from "react-icons/bs";

// aos
import AOS from "aos";
import "aos/dist/aos.css";



const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  });

  const [show, setShow] = useState(false);

  const videoStartHandler = () => {
    const video = document.querySelector("#video");
    video.currentTime = 0;
    video.load();
    setShow(true);
  };

  const clickHandler = () => {
    const video = document.querySelector("#video");
    video.pause();
    setShow(false);
  };

  return (
    <div className="relative lg:mx-32">
      <h1
        data-aos="fade-down"
        className="text-3xl font-semibold text-center text-[#7A6960]"
      >
        About Me
      </h1>
      <div className="flex justify-center items-center mt-2 mb-10">
       <div className="h-1 w-16 rounded" style={{backgroundColor: '#8e1616'}}></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:gap-10 secondary-font">
        <div
          data-aos="fade-up"
          className="lg:w-1/2 w-full md:w-3/4 py-16 px-10 md:px-0"
        >
          <img className="w-full" src={img} alt="img" />
        </div>
        <div className="lg:w-1/2 w-full md:w-3/4 px-10 md:p-0">
          <div data-aos="fade-left">
            <h1 className="text-[#7A6960] md:text-3xl font-semibold">
              Passionate
            </h1>
            <p className="text-lg mt-5 text-gray-600 primary-font">
             With a passion for helping small businesses grow, I am a freelance digital marketer specializing in strategies that drive real results.
            From crafting compelling campaigns to optimizing for conversions, every solution is tailored to meet the unique needs of each client.
            </p>
          </div>

          {/* 1st template */}
          <div
            data-aos="zoom-in"
            className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5"
          >
            <div
              className="w-fit p-2 md:p-5 rounded" style={{backgroundColor: '#8e1616', color: "white"}}
            >
              <BsPeople size={"28px"} />
            </div>
            <div className="w-full">
              <h2 className="text-[#7A6960] text-xl font-medium">
              Experienced
              </h2>
              <p className="text-base text-gray-600 primary-font lg:mt-1 mt-2">
                Over the years, I have helped startups, local brands, and entrepreneurs establish their online presence, boost visibility, and turn engagement into revenue. 
                
              </p>
            </div>
          </div>

          {/* 2nd template */}
          <div
            data-aos="zoom-in"
            className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5"
          >
            <div className="w-fit p-2 md:p-5 rounded" style={{backgroundColor: '#8e1616', color: "white"}}
            >
              <BsPeople size={"28px"} />
            </div>
            <div className="w-full">
              <h2 className="text-[#7A6960] text-xl font-medium">
                Effective
              </h2>
              <p className="text-base text-gray-600 primary-font lg:mt-1 mt-2">
               Whether it's SEO, social media, paid ads, or email marketing — the goal is always the same: smart, effective marketing without the agency fluff.
              </p>
            </div>
          </div>

          {/* para */}
          <p
            data-aos="zoom-in"
            className="text-lg mt-5 text-gray-600 primary-font"
          >
           Ready to grow your business? Let’s connect and start crafting your winning marketing strategy today.

          </p>
          <div className="flex flex-col justify-center sm:flex-row items-center mb-12 lg:mb-0 lg:flex-row gap-10 mt-10">
            <div>
              <a href="/Marketing-Website/#contact" className="">
                <CtaButton name={"Get Started"} />
              </a>
            </div>
            {/* <div
              onClick={() => videoStartHandler()}
              className="shadow shadow-zinc-300 hover:shadow-orange-600 hover:shadow px-4 py-2 rounded-3xl"
            >
              <VideoBtn name={"Watch Video"} />
            </div> */}
          </div>

          {/* <div
            className={`${
              show ? "block" : "hidden"
            } absolute right-0 top-0 lg:w-full lg:h-full bg-zinc-500 bg-opacity-50 rounded overflow-hidden flex justify-center items-center shadow-2xl lg:mb-20 transition-all duration-300`}
          >
            <div
              onClick={() => clickHandler()}
              className="absolute right-10 top-6 text-3xl font-light bg-zinc-700 px-3 rounded-full text-white cursor-pointer"
            >
              x
            </div>
            <video
              id="video"
              muted
              controls
              autoPlay
              className="w-[800px] rounded"
              src={video}
            ></video>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
