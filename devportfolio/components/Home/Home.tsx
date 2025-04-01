"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import Project from "./Project/Project";
import Skills from "./Skills/Skills";
//import Reviews from "./Reviews/Reviews";
//import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Aos from "aos";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
