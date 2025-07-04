import React from "react";
import Template from "./Template";
import appImage from "../img/portfolio/app-1.jpg";
import NavBar from "../components/NavBar";
import Contact from "../components/Contact";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const SocialMedia = () => {
  return (
    <div>
      <div className="secondary-font">
        <NavBar />
      </div>
      <Template
        title={"Social Media Marketing"}
        desc={
          "Lorem doloribus ex quisquam. Nesciunt laborum laboriosam consequuntur, eum id molestias in, Nesciunt laborum laboriosam consequuntur, eum id molestias in."
        }
        image={appImage}
      />
    </div>
  );
};

export default SocialMedia;
