import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import FeaturedCoursesCarousel from "../components/FeaturedCoursesCarousel"
import UpcomingEvents from "../components/UpcomingEvents";
import OurStudentsSay from "../components/OurStudentsSay";


const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <FeaturedCoursesCarousel />
      <UpcomingEvents />
      <OurStudentsSay />
    </>
  );
};

export default Home;
