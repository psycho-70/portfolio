'use client';
import React, { useState, useEffect, useRef, useContext } from "react";
import Services from "@/components/Services";
import About from "@/components/About";
import Home from "@/components/Home";
import Skill from "@/components/Skill";
import Project from "@/components/Project";
import Comments from "@/components/Comments";
import TeamMemberCard from "@/components/Team";
import { useAppContext } from "./Context/AppContext";
import PageWithFixedBackground from "@/components/BackGroundimage";
import WorkExperienceShowcase from "@/components/WorkExperienceShowcase ";
const Page = () => {
  const [loading, setLoading] = useState(true);
  const [terminalText, setTerminalText] = useState("");
  const [showModeQuestion, setShowModeQuestion] = useState(false);
  const [waitingForUser, setWaitingForUser] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);
  const { darkMode, toggleDarkMode } = useAppContext();

  useEffect(() => {
    const fullText = [
      "> Initializing system...",
      "> Welcome to my World...",
      "> Checking display preferences..."
    ];

    let currentText = "";
    let lineIndex = 0;
    let charIndex = 0;

    const type = () => {
      if (lineIndex >= fullText.length) {
        clearInterval(intervalRef.current);
        setShowModeQuestion(true);
        setWaitingForUser(true);
        return;
      }

      const line = fullText[lineIndex];
      
      if (charIndex < line.length) {
        currentText += line[charIndex];
        setTerminalText(currentText);
        charIndex++;
      } else {
        currentText += "\n";
        setTerminalText(currentText);
        lineIndex++;
        charIndex = 0;
      }
    };

    intervalRef.current = setInterval(type, 50);

    return () => {
      clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleModeSelection = (selectedDarkMode) => {
    if (selectedDarkMode !== darkMode) {
      toggleDarkMode();
    }
    setShowModeQuestion(false);
    setTerminalText(prev => prev + "\n> Preference saved. Loading interface...");
    setWaitingForUser(false);
    // Start the timeout only after user selection
    timeoutRef.current = setTimeout(() => setLoading(false), 2000);
  };

  if (loading) {
    return (
      <div className={`fixed inset-0  text-2xl ${darkMode ? 'bg-black text-green-400' : 'bg-white text-gray-800'} font-mono flex flex-col items-center justify-center p-8 z-50`}>
        <div className="terminal-text whitespace-pre mb-4">
          {terminalText}
          {!waitingForUser && <span className="animate-pulse">_</span>}
        </div>
        
        {showModeQuestion && (
          <div className="mt-6 text-center animate-fade-in">
            <p className="mb-4">Select your preferred interface mode:</p>
            <div className="flex gap-4 justify-center">
              <button 
                onClick={() => handleModeSelection(true)}
                className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                🌙 Dark Mode
              </button>
              <button 
                onClick={() => handleModeSelection(false)}
                className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors"
              >
                ☀️ Light Mode
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen overflow-x-hidden dark:bg-gray-900 dark:text-white">
        <div id="home">
          <Home />
          <PageWithFixedBackground />
        </div>
        <div id="about">
          {/* <About /> */}
        </div>
        <div id="skill">
          <Skill />
        </div>
        <div id="Experince">
          <WorkExperienceShowcase />
        </div>
        <div id="project">
          <Project />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="team">
          <TeamMemberCard/>
        </div>
        <div id="comments">
          <Comments />
        </div>
       
      </div>
    </div>
  );
};

export default Page;