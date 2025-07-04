import React, { useEffect } from "react";
import Card from "./Card";
import { HiOutlineChartPie } from "react-icons/hi2";

// aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  });

  // const clickHandler = () => {
  //   navigate("social-marketing");
  // };
  return (
    <div className="text-[#7A6960]">
      <h1 data-aos="fade-down" className="text-3xl font-semibold text-center">
        Services
      </h1>
      <div className="flex justify-center items-center mt-2">
       <div className="h-1 w-16 rounded" style={{backgroundColor: '#8e1616'}}></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        Whether you're starting from scratch or looking to fine-tune your existing marketing, I offer tailored services designed to meet your business where it’s at and take it further.
      </p>
      <div
        className="flex flex-col lg:flex-row items-center gap-5"
        data-aos="fade-up"
      >
        <div onClick={() => navigate("/social-marketing")}>
          <Card
            img={<HiOutlineChartPie />}
            title={"Social Media Marketing"}
            desc={
              "Utilizing social media platforms to build brand awareness, engage with customers, and drive traffic to a website"
            }
          />
        </div>

        <div onClick={() => navigate("/PPC")}>
          <Card
            img={<HiOutlineChartPie />}
            title={"Pay-Per-Click (PPC) Advertising"}
            desc={
              "Running targeted online ads, typically on search engines or social media platforms, where advertisers pay only when their ad is clicked."
            }
          />
        </div>

        <div onClick={() => navigate("/seo-optimization")}>
          <Card
            img={<HiOutlineChartPie />}
            title={"Search Engine Optimization"}
            desc={
              "Utilizing social media platforms to build brand awareness, engage with customers, and drive traffic to a website."
            }
          />
        </div>

        <div onClick={() => navigate("/campagin-creation")}>
          <Card
            img={<HiOutlineChartPie />}
            title={"Campaign Creation"}
            desc={
              "Creating a bespoke strategic plan for promoting your business. With the goal to boost brand awareness, engagement and conversions with your target audience."
            }
          />
        </div>
         <div onClick={() => navigate("/influencer-marketing")}>
          <Card
            img={<HiOutlineChartPie />}
            title={"Influencer Marketing"}
            desc={
              "Collaborating with individuals who have a large and engaged following on social media to promote a brand or product. "
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
