'use client';
import React from "react";

import Services from "@/components/Services";
import About from "@/components/About";
import Home from "@/components/Home";
import Skill from "@/components/Skill";
import Project from "@/components/Project";
import Comments from "@/components/Comments";
import TeamMemberCard from "@/components/Team";
const Page = () => {
  return (
    <div>
      
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skill">
        <Skill />
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="team">
        < TeamMemberCard/>
      </div>
     
      <div id="comments">
        <Comments />
      </div>
    </div>
  );
};

export default Page;
