import About from "@/sections/About";
import Banner from "@/sections/Banner";
import Excellence from "@/sections/Excellence";
import Facilities from "@/sections/Facilities";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Launching from "@/sections/Launching";
import Navbar from "@/sections/Navbar";
import OurProfessionals from "@/sections/OurProfessionals";
import Programs from "@/sections/Programs";
import SlidingWords from "@/sections/SlidingWords";
import Testimonials from "@/sections/Testimonials";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Features />
      <Excellence />
      <Programs />
      <SlidingWords />
      <Launching />
      <OurProfessionals />
      <Facilities />
      <Banner />
      <Footer />
    </>
  );
}

export default page;
