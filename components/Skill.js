'use client';
import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useAppContext } from '@/app/Context/AppContext';

const SkillsShowcase = () => {
  const { darkMode } = useAppContext();
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [tooltip, setTooltip] = useState({ show: false, content: '', x: 0, y: 0 });

  const nameTexts = [
    "Full Stack Developer",
    "Frontend Specialist",
    "React Expert", 
    "UI/UX Designer",
    "JavaScript Developer"
  ];

  const skills = [
    {
      category: "Frontend Technologies",
      icon: "🌐",
      skills: [
        { name: "HTML5", level: 95, color: "from-orange-500 via-red-500 to-pink-500", icon: "🌐", description: "Semantic markup & modern standards" },
        { name: "CSS3", level: 90, color: "from-blue-500 via-cyan-500 to-teal-500", icon: "🎨", description: "Advanced styling & animations" },
        { name: "Tailwind CSS", level: 88, color: "from-teal-500 via-emerald-500 to-green-500", icon: "💨", description: "Utility-first CSS framework" },
        { name: "JavaScript", level: 85, color: "from-yellow-500 via-orange-500 to-red-500", icon: "⚡", description: "Modern ES6+ features" },
        { name: "TypeScript", level: 80, color: "from-blue-600 via-indigo-600 to-purple-600", icon: "📘", description: "Type-safe development" },
      ]
    },
    {
      category: "Frontend Frameworks",
      icon: "⚛️",
      skills: [
        { name: "React.js", level: 90, color: "from-cyan-400 via-blue-500 to-indigo-500", icon: "⚛️", description: "Component-based architecture" },
        { name: "Next.js", level: 85, color: "from-gray-700 via-gray-800 to-black", icon: "🔺", description: "Full-stack React framework" },
        { name: "Redux", level: 78, color: "from-purple-500 via-pink-500 to-rose-500", icon: "🔄", description: "State management solution" },
      ]
    },
    {
      category: "Development Tools",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 85, color: "from-red-500 via-orange-500 to-yellow-500", icon: "🌿", description: "Version control system" },
        { name: "GitHub", level: 88, color: "from-gray-700 via-gray-800 to-gray-900", icon: "🐙", description: "Code collaboration platform" },
        { name: "Jira", level: 75, color: "from-blue-600 via-indigo-600 to-purple-600", icon: "📋", description: "Project management tool" },
        { name: "TFS", level: 70, color: "from-indigo-500 via-purple-500 to-pink-500", icon: "🔧", description: "Team foundation server" },
      ]
    },
    {
      category: "Integration & Design",
      icon: "🎯",
      skills: [
        { name: "API Integration", level: 82, color: "from-green-500 via-teal-500 to-cyan-500", icon: "🔗", description: "RESTful & GraphQL APIs" },
        { name: "UI Design", level: 85, color: "from-pink-500 via-rose-500 to-red-500", icon: "🎯", description: "User interface design" },
        { name: "UX Design", level: 80, color: "from-violet-500 via-purple-500 to-indigo-500", icon: "👥", description: "User experience optimization" },
      ]
    }
  ];

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [controls, isInView]);

  // Enhanced Typing Effect Component
  const TypingEffect = ({ texts }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => {
        const fullText = texts[currentTextIndex];
        
        if (isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        } else {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        }

        if (!isDeleting && currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }, isDeleting ? 50 : 100);

      return () => clearTimeout(timeout);
    }, [currentText, isDeleting, texts, currentTextIndex]);

    return (
      <span className={`inline-block ${
        darkMode 
          ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg' 
          : 'bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent'
      }`}>
        {currentText}
        <span className={`animate-pulse ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>|</span>
      </span>
    );
  };

  // Enhanced Tooltip Component
  const Tooltip = ({ show, content, x, y }) => {
    if (!show) return null;
    
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="fixed z-50 pointer-events-none"
        style={{ left: x, top: y }}
      >
        <div className={`px-4 py-2 rounded-xl shadow-2xl border backdrop-blur-lg transform -translate-x-1/2 -translate-y-full mb-2 ${
          darkMode 
            ? 'bg-gray-800/95 border-gray-700/50 text-gray-100' 
            : 'bg-white/95 border-gray-200/50 text-gray-900'
        }`}>
          <div className="text-sm font-medium">{content}</div>
          <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
            darkMode ? 'border-t-gray-800/95' : 'border-t-white/95'
          }`}></div>
        </div>
      </motion.div>
    );
  };

  const handleMouseEnter = (skill, event) => {
    setTooltip({
      show: true,
      content: skill.description,
      x: event.clientX,
      y: event.clientY
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ show: false, content: '', x: 0, y: 0 });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.15 }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], staggerChildren: 0.1 }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className={`relative w-full min-h-screen transition-all duration-700 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Enhanced Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute inset-0 ${darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-purple-900/30 to-blue-900/30' 
          : 'bg-gradient-to-br from-blue-50 via-purple-50/80 to-pink-50/80'
        }`}></div>
        
        {/* Floating orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full blur-xl ${darkMode ? 'bg-purple-500/20' : 'bg-blue-400/20'}`}
            style={{
              width: `${Math.random() * 300 + 150}px`,
              height: `${Math.random() * 300 + 150}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 py-8 sm:py-16" ref={ref}>
        {/* Enhanced Header with Special "I AM" Effect */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
          }}
          className="text-center mb-12 sm:mb-20"
        >
          <motion.h1 
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className={`${
              darkMode 
                ? 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]' 
                : 'text-gray-900 drop-shadow-[0_0_10px_rgba(0,0,0,0.1)]'
            }`}>
              I AM{' '}
            </span>
            <TypingEffect texts={nameTexts} />
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className={`inline-block px-8 py-4 rounded-2xl backdrop-blur-lg border ${
              darkMode ? 'bg-gray-800/50 border-gray-700/30' : 'bg-white/50 border-white/30'
            }`}>
              <p className={`text-sm sm:text-base font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                🚀 Showcasing expertise in modern web development
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Skills Grid */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
        >
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={categoryVariants}
              className={`group relative backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl border transition-all duration-500 hover:scale-[1.02] ${
                darkMode 
                  ? 'bg-gray-800/40 border-gray-700/20 hover:bg-gray-800/60 hover:border-gray-600/40' 
                  : 'bg-white/60 border-white/40 hover:bg-white/80 hover:border-white/60'
              }`}
            >
              {/* Category header */}
              <div className="flex items-center space-x-4 mb-8">
                <motion.div 
                  className={`p-3 rounded-2xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/50'}`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <span className="text-2xl">{category.icon}</span>
                </motion.div>
                <div>
                  <h2 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {category.category}
                  </h2>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {category.skills.length} technologies
                  </div>
                </div>
              </div>
              
              {/* Skills */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    className="group/skill relative"
                    onMouseEnter={(e) => {
                      setHoveredSkill(`${categoryIndex}-${skillIndex}`);
                      handleMouseEnter(skill, e);
                    }}
                    onMouseLeave={() => {
                      setHoveredSkill(null);
                      handleMouseLeave();
                    }}
                  >
                    {/* Skill header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <motion.div 
                          className={`p-2 rounded-xl transition-all duration-300 ${
                            hoveredSkill === `${categoryIndex}-${skillIndex}` 
                              ? 'bg-gradient-to-r ' + skill.color + ' text-white shadow-lg' 
                              : darkMode ? 'bg-gray-700/50' : 'bg-gray-100/50'
                          }`}
                          whileHover={{ scale: 1.2, rotate: 5 }}
                        >
                          <span className="text-lg">{skill.icon}</span>
                        </motion.div>
                        <div>
                          <span className={`font-semibold text-sm sm:text-base ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                            {skill.name}
                          </span>
                        </div>
                      </div>
                      <motion.div 
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                        }`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill.level}%
                      </motion.div>
                    </div>
                    
                    {/* Enhanced Progress Bar */}
                    <div className={`relative w-full h-4 rounded-full overflow-hidden ${
                      darkMode ? 'bg-gray-700/50' : 'bg-gray-200/50'
                    }`}>
                      <motion.div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full shadow-lg`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 2,
                          delay: categoryIndex * 0.3 + skillIndex * 0.15,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                      >
                        <motion.div
                          className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
                          animate={{
                            x: hoveredSkill === `${categoryIndex}-${skillIndex}` ? "100%" : "-100%",
                          }}
                          transition={{
                            duration: 1,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.8 } }
          }}
          className="mt-16 sm:mt-20 text-center"
        >
          <div className={`inline-flex items-center space-x-6 px-8 py-4 rounded-2xl backdrop-blur-lg border ${
            darkMode 
              ? 'bg-gray-800/50 border-gray-700/30' 
              : 'bg-white/60 border-white/40'
          }`}>
            <div className="flex items-center space-x-2">
              <motion.div 
                className="w-3 h-3 bg-green-500 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(34, 197, 94, 0.7)",
                    "0 0 0 10px rgba(34, 197, 94, 0)",
                    "0 0 0 0 rgba(34, 197, 94, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Available for Projects
              </span>
            </div>
            <div className={`w-px h-6 ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
            <span className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {skills.reduce((total, cat) => total + cat.skills.length, 0)} Technologies Mastered
            </span>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Tooltip */}
      <Tooltip {...tooltip} />
    </div>
  );
};

export default SkillsShowcase;