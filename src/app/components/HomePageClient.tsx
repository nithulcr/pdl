'use client';

import { useState, useEffect } from "react";

import Header from "./Header";
import Hero from "./Hero";
import WhoWeAre from "./WhoWeAre";
// import ProjectsScroller from "./ProjectsScroller";
import Insights from "./Insights";
import OurValues from "./OurValues";



import Services from "./Services";
import CaseStudy from "./CaseStudy";


import ThreeStepProcess from "./ThreeStepProcess";

import MainServices from "./MainServices";

import Testimonials from "./Testimonials";
import Blogs from "./Blogs";


import Footer from "./Footer";
import CEO from "./CEO";

export default function HomePageClient() {
    const [showContent, setShowContent] = useState(true);

  return (
    <div>

      {showContent && (
        <>
          <Header />
          <Hero />
          <WhoWeAre />
          {/* <ProjectsScroller /> */}
          <Insights />
          <OurValues />

        
          <Services />
          <CaseStudy />
          <CEO />
          


          <MainServices />
          <ThreeStepProcess />


          <Testimonials />
          <Blogs />






          <Footer />
        </>
      )}
    </div>
  );
}
