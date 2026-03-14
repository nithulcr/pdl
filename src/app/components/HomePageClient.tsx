'use client';

import { useState, useEffect } from "react";

import Header from "./Header";
import Hero from "./Hero";
import WhoWeAre from "./WhoWeAre";
import ProjectsScroller from "./ProjectsScroller";
import OurValues from "./OurValues";


import Services from "./Services";
import CaseStudy from "./CaseStudy";


import ThreeStepProcess from "./ThreeStepProcess";
import ItTech from "./It-tech";

import MainServices from "./MainServices";

import Testimonials from "./Testimonials";
import Blogs from "./Blogs";


import Footer from "./Footer";

export default function HomePageClient() {
    const [showContent, setShowContent] = useState(true);

  return (
    <div>

      {showContent && (
        <>
          <Header />
          <Hero />
          <WhoWeAre />
          <ProjectsScroller />
          <OurValues />
        
          <Services />
          <CaseStudy />
          <ItTech />
          


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
