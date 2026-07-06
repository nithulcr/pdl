'use client';

import { useState, useEffect } from "react";

import Header from "./Header";
import HeroMain from "./HeroMain";
import WhoWeAre from "./WhoWeAre";
// import ProjectsScroller from "./ProjectsScroller";
import Partners from "./Partners";

import Insights from "./Insights";
import OurValues from "./OurValues";



import Services from "./Services";
import CaseStudy from "./CaseStudy";


import ThreeStepProcess from "./ThreeStepProcess";

import MainServices from "./MainServices";

import Testimonials from "./Testimonials";
import Blogs from "./Blogs";
import ContactForm from "./ContactForm";



import Footer from "./Footer";
import CEO from "./CEO";

export default function HomePageClient() {
    const [showContent, setShowContent] = useState(true);

  return (
    <div>

      {showContent && (
        <>
          <Header />
          <HeroMain />
          <Partners />

          <WhoWeAre />
          <OurValues />


          {/* <ProjectsScroller /> */}
          <Insights />
          <Services />
          <ThreeStepProcess />


          <MainServices />

          <CaseStudy />
          <CEO />

          <Testimonials />
          <Blogs />
          {/* <ContactForm /> */}
          <Footer />
        </>
      )}
    </div>
  );
}
